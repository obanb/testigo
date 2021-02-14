import {Collection, Db, ObjectID} from 'mongodb';
import * as TE from 'fp-ts/TaskEither';
import {BackendError, createBackendError, ErrorTag} from './errors';
import * as t from 'io-ts';

export const objectId = new t.Type<ObjectID, ObjectID, any>(
    'objectId',
    (input: any): input is ObjectID => ObjectID.isValid(input),
    (input, context) => (ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)),
    t.identity,
);


export const objectIdstring = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly objectIdstring: unique symbol;
        }
    > => n.length === 24,
    'objectIdstring',
);


export type ObjectIdString = t.TypeOf<typeof objectIdstring>;

export type ObjectId = t.TypeOf<typeof objectId>;


export const getCollection = <TCol>(name: string) => (database: Db) =>
    TE.tryCatch<BackendError, Collection<TCol>>(
        async () => database.collection(name),
        createBackendError(`Get database collection ${name} error.`, ErrorTag.database),
    );


