import * as t from 'io-ts';
import {Collection, ObjectID} from 'mongodb';
import {Newtype} from 'newtype-ts';
import {pipe} from 'fp-ts/pipeable';
import {Eq, eqString, getStructEq} from 'fp-ts/Eq';
import * as TE from 'fp-ts/TaskEither';
import {BackendError, createBackendError, ErrorTag} from '../errors';
import {internalMongoClient} from '../../server/Server';
import * as E from 'fp-ts/Either';
import {getInternalDatabase} from '../mongoInternal';
import {getCollection} from '../mongo';
import * as A from 'fp-ts/Array';

/**
 * Account models
 */

export const accountId = new t.Type<AccountId, AccountId, any>(
    'accountId',
    (input: any): input is AccountId => ObjectID.isValid(input),
    (input, context) => (ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)),
    t.identity,
);

export const accountName = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly accountName: unique symbol;
        }
    > => n.length > 3 && n.length < 30,
    'accountName',
);
export type AccountName = t.TypeOf<typeof accountName>;

export const accountSurname = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly accountSurname: unique symbol;
        }
    > => n.length > 2 && n.length < 30,
    'accountSurname',
);
export type AccountSurname = t.TypeOf<typeof accountSurname>;

export const accountEmail = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly accountEmail: unique symbol;
        }
    > => n.length > 2 && n.length < 30,
    'accountEmail',
);
export type AccountEmail = t.TypeOf<typeof accountEmail>;

export const loginPassword = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly loginPassword: unique symbol;
        }
    > => n.length > 6 && n.length < 30,
    'loginPassword',
);
export type AccountPassword = t.TypeOf<typeof loginPassword>;

export enum AccountTypeEnum {
    user = 'USER',
    admin = 'ADMIN',
}

export interface AccountId extends Newtype<{readonly AccountId: unique symbol}, AccountId> {}

export const accountRaw = t.interface({
    _id: accountId,
    name: accountName,
    surname: accountSurname,
    email: accountEmail,
    password: t.string,
    salt: t.string,
    aktivni: t.boolean,
    type: t.union([t.literal('user'), t.literal('admin')]),
});

export const accountPlain = t.interface({
    name: accountName,
    surname: accountSurname,
    email: accountEmail,
    password: t.string,
    salt: t.string,
    aktivni: t.boolean,
    type: t.union([t.literal('user'), t.literal('admin')]),
});

export type AccountPlain = t.TypeOf<typeof accountPlain>;

export type AccountRaw = t.TypeOf<typeof accountRaw>;

export const createAccountInput = t.interface({
    name: accountName,
    surname: accountSurname,
    password: loginPassword,
    email: accountEmail,
});

export const loginAccountInput = t.interface({
    email: accountEmail,
    password: loginPassword,
});

export type CreateAccountInput = t.TypeOf<typeof createAccountInput>;

const registerAccount = (input: CreateAccountInput) => pipe(input, checkAccountExists);

export const getAccountCol = () => pipe(internalMongoClient, E.chain(getInternalDatabase()), TE.fromEither, TE.chain(getCollection<AccountRaw>('accounts')));

export const checkAccountExists = (input: CreateAccountInput) =>
    pipe(
        getAccountCol(),
        TE.chain((col) => findAccountByKey('email', col)(input.email)),
        TE.map((acc) => (acc ? accountEq.emailType.equals(acc, (input as unknown) as AccountRaw) : false)),
        TE.chain((notFound) => (notFound ? TE.left(createBackendError(`Account already exists.`, ErrorTag.database)({})) : TE.right(input))),
        TE.chain(createAccount)
    );

export const findAccountByKey = <B extends keyof AccountRaw>(key: B, col: Collection<AccountRaw>) => (keyValue: AccountRaw[B]) =>
    TE.tryCatch<BackendError, AccountRaw>(() => col.findOne({[key]: keyValue}), createBackendError(`FindAccountByKey with ${key} key`, ErrorTag.database));

const eqAccountEmailType: Eq<AccountRaw> = getStructEq({
    email: eqString,
    type: eqString,
});

const eqAccountNameSurname: Eq<AccountRaw> = getStructEq({
    name: eqString,
    surname: eqString,
});

const accountEq = {
    emailType: eqAccountEmailType,
    nameSurname: eqAccountNameSurname,
};

export const insertAccountToCol = (input: AccountPlain) => (col: Collection<AccountRaw>) =>
    pipe(
        TE.tryCatch(
            () => col.insertOne(input as AccountRaw), // for Mongo insert WithId satisfaction, but id is automatically created by Mongo inself
            createBackendError(`Error while inserting ${JSON.stringify(input)} collection ${col.collectionName}`, ErrorTag.database),
        ),
    );

export const prepareAccountDocument = (input: CreateAccountInput): AccountPlain => ({
    email: input.email,
    name: input.name,
    surname: input.surname,
    password: input.password,
    aktivni: true,
    salt: 'xxxx',
    type: 'user',
});

export const createAccount = (input: CreateAccountInput): TE.TaskEither<BackendError, AccountRaw> =>
    pipe(
        getAccountCol(),
        TE.chain(insertAccountToCol(prepareAccountDocument(input))),
        TE.chain((res) =>
            pipe(
                res.ops,
                A.lookup(0),
                E.fromOption(() => createBackendError('Empty response ops', ErrorTag.database)({})),
                E.chainW(accountRaw.decode),
                E.mapLeft(createBackendError('Response format error', ErrorTag.database)),
                TE.fromEither,
            ),
        ),
    );
