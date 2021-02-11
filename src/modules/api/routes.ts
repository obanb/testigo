import * as express from 'express';
import {toRequestHandler} from 'hyper-ts/lib/express';
import {createIssueInput, getIssueInput, isoIssueId, issueId} from '../issue/model';
import {pipe} from 'fp-ts/pipeable';
import * as H from 'hyper-ts';
import {createBackendError, ErrorTag} from '../errors';
import {failure} from 'io-ts/PathReporter';
import {sendBodyAndClose, withErrorCode} from './common';
import {ObjectID} from 'mongodb';
import {createIssue, getIssueById} from '../issue/issue';
import {objectIdstring} from '../mongo';

const router = express.Router();

const createIssueRequestHandler = pipe(
    H.decodeBody(createIssueInput.decode),
    H.mapLeft((e) => createBackendError(failure(e).join('\n'), ErrorTag.api)(e)),
    H.ichain((decoded) => H.fromTaskEither(createIssue(decoded))),
    H.ichain(sendBodyAndClose('createIssueHandler JSON error')),
    H.orElse(withErrorCode(H.Status.BadRequest)),
);

router.route('/createIssue').post(toRequestHandler(createIssueRequestHandler));

const getIssueByIdHandler = pipe(
    H.decodeParam("id", objectIdstring.decode),
    H.map((decoded) => new ObjectID(decoded)),
    H.mapLeft((e) => createBackendError(failure(e).join('\n'), ErrorTag.api)(e)),
    H.ichain((decoded) => H.fromTaskEither(getIssueById(isoIssueId.wrap(decoded)))),
    H.ichain(sendBodyAndClose('getIssueByIdHandler JSON error')),
    H.orElse(withErrorCode(H.Status.BadRequest)),
);

router.route('/getIssue').get(toRequestHandler(getIssueByIdHandler));

export {router};
