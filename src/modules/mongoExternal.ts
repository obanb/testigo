import {Db, MongoClient, MongoClientOptions} from 'mongodb';
import * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';
import {BackendError, createBackendError, ErrorTag} from './errors';
import {iso, Newtype} from 'newtype-ts';
import {pipe} from 'fp-ts/lib/pipeable';

export interface ExternalMongoClientOptions extends Newtype<{readonly ExternalMongoClientOptions: unique symbol}, MongoClientOptions> {}
export interface ExternalMongoClient extends Newtype<{readonly ExternalMongoClient: unique symbol}, MongoClient> {}

export const isoExternalMongoClientOptions = iso<ExternalMongoClientOptions>();
const isoExternalMongoClient = iso<ExternalMongoClient>();

export interface ExternalMongoUri extends Newtype<{readonly ExternalMongoUri: unique symbol}, string> {}

export const isoExternalMongoUri = iso<ExternalMongoUri>();

export const getConnectedExternalClient = (uri: ExternalMongoUri, options?: ExternalMongoClientOptions) =>
    pipe(
        TE.tryCatch<BackendError, MongoClient>(
            async () =>
                MongoClient.connect(
                    isoExternalMongoUri.unwrap(uri),
                    isoExternalMongoClientOptions.unwrap(options),
                ),
            createBackendError(`Get external database client error.`, ErrorTag.database),
        ),
        TE.map(isoExternalMongoClient.wrap),
    );

export const getExternalDatabase = (name?: string) => (client: ExternalMongoClient) =>
    E.tryCatch<BackendError, Db>(
        () => isoExternalMongoClient.unwrap(client).db(name ? name : null),
        createBackendError(`Get external database ${name} error.`, ErrorTag.database),
    );
