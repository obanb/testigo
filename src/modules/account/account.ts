import * as t from 'io-ts';
import {ObjectID} from 'mongodb';
import {Newtype} from 'newtype-ts';

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

export interface AccountId extends Newtype<{readonly AccountId: unique symbol}, AccountId> {}

export const accountRaw = t.interface({
    _id: accountId,
    name: accountName,
    surname: accountSurname,
    email: accountEmail,
    password: t.string,
    salt: t.string,
    aktivni: t.boolean,
});


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
