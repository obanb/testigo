import {pipe} from 'fp-ts/pipeable';
import * as H from 'hyper-ts';
import {BackendError, createBackendError, ErrorTag} from '../errors';

type WithErrorRequest = typeof H.Status.BadRequest | typeof H.Status.BadGateway | typeof H.Status.InternalServerError;

export const withErrorCode = (status: WithErrorRequest) => (message: BackendError) =>
    pipe(
        H.status(status),
        H.ichain(() => H.closeHeaders()),
        H.ichain(() => H.send(message.errorMessage)),
    );


export const sendBodyAndClose = <TBody>(message: string) => (body:TBody) => pipe(
    H.status<BackendError>(H.Status.OK),
    H.ichain(() => H.json(body, createBackendError(message, ErrorTag.api))),
);