import * as t from 'io-ts';

// error definitions

export enum ErrorTag {
    database = 'DATABASE',
    api = 'API',
}

export const databaseError = t.interface({
    _tag: t.literal('databaseError'),
    errorMessage: t.string,
    rawError: t.unknown,
});

export const applicationError = t.interface({
    _tag: t.literal('applicationError'),
    errorMessage: t.string,
    rawError: t.unknown,
});

export const apiError = t.interface({
    _tag: t.literal('apiError'),
    errorMessage: t.string,
    rawError: t.unknown,
});

export const coreError = t.union([applicationError, databaseError]);

export type DatabaseError = t.TypeOf<typeof databaseError>;
export type ApplicationError = t.TypeOf<typeof applicationError>;
export type ApiError = t.TypeOf<typeof apiError>;

export type CoreError = t.TypeOf<typeof coreError>;
export type ShellError = ApiError;

// withs

interface ErrorProps {
    errorMessage: string;
    rawError: unknown;
}

const withErrorProps = (errorMessage: string, error: unknown): ErrorProps => ({
    errorMessage,
    rawError: error,
});

// error creators

export const createDatabaseError = (errorMessage: string) => (error: unknown): DatabaseError => ({
    _tag: 'databaseError',
    ...withErrorProps(errorMessage, error),
});

export const createApplicationError = (errorMessage: string) => (error: unknown): ApplicationError => ({
    _tag: 'applicationError',
    ...withErrorProps(errorMessage, error),
});

export const createApiError = (errorMessage: string) => (error: unknown): ApiError => ({
    _tag: 'apiError',
    ...withErrorProps(errorMessage, error),
});

export interface BackendError extends ErrorProps {
    _tag: ErrorTag;
}

export const createBackendError = (errorMessage: string, tag: ErrorTag) => (error: unknown): BackendError => ({
    _tag: tag,
    ...withErrorProps(errorMessage, error),
});
