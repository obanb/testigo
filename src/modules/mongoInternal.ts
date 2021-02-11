import {Db, MongoClient, MongoClientOptions} from 'mongodb';
import * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';
import {BackendError, createBackendError, ErrorTag} from './errors';
import {iso, Newtype} from 'newtype-ts';
import {pipe} from 'fp-ts/lib/pipeable';

export interface InternalMongoClientOptions extends Newtype<{readonly InternalMongoClientOptions: unique symbol}, MongoClientOptions> {}
export interface InternalMongoClient extends Newtype<{readonly InternalMongoClient: unique symbol}, MongoClient> {}

export const isoInternalMongoClientOptions = iso<InternalMongoClientOptions>();
const isoInternalMongoClient = iso<InternalMongoClient>();

export interface InternalMongoUri extends Newtype<{readonly InternalMongoUri: unique symbol}, string> {}

export const isoInternalMongoUri = iso<InternalMongoUri>();

export const getConnectedInternalClient = (uri: InternalMongoUri, options?: InternalMongoClientOptions): TE.TaskEither<BackendError, InternalMongoClient> =>
    pipe(
        TE.tryCatch(
            async () =>
                MongoClient.connect(
                    isoInternalMongoUri.unwrap(uri),
                    isoInternalMongoClientOptions.unwrap(options),
                ),
            createBackendError(`Get internal database client error.`, ErrorTag.database),
        ),
        TE.map(isoInternalMongoClient.wrap),
    );
export const getInternalDatabase = (name?: string) => (client: InternalMongoClient) =>
    E.tryCatch<BackendError, Db>(
        () => isoInternalMongoClient.unwrap(client).db(name ? name : null),
        createBackendError(`Get internal database client error.`, ErrorTag.database),
    );
