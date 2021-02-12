import {pipe} from 'fp-ts/pipeable';
import {internalMongoClient} from '../../server/Server';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import {getInternalDatabase} from '../mongoInternal';
import {getCollection} from '../mongo';
import {BackendError, createBackendError, ErrorTag} from '../errors';
import * as A from 'fp-ts/Array';
import {Collection} from 'mongodb';
import {CreateIssueInput, IssueId, IssuePlain, IssueRaw, issueRaw} from './model';

export const createIssue = (input: CreateIssueInput): TE.TaskEither<BackendError, IssueRaw> =>
    pipe(
        getIssueCol(),
        TE.chain(insertIssueToCol(prepareIssueDocument(input))),
        TE.chain((res) =>
            pipe(
                res.ops,
                A.lookup(0),
                E.fromOption(() => createBackendError('Empty response ops', ErrorTag.database)({})),
                E.chainW(issueRaw.decode),
                E.mapLeft(createBackendError('Response format error', ErrorTag.database)),
                TE.fromEither,
            ),
        ),
    );

export const getIssueById = (id: IssueId): TE.TaskEither<BackendError, IssueRaw> =>
    pipe(
        getIssueCol(),
        TE.chain((col) =>
            TE.tryCatch(
                () => col.findOne<IssueRaw>({_id: id}),
                createBackendError(`getIssueById error with id: ${String(id)})`, ErrorTag.database),
            ),
        ),
    );

export const getIssues = (): TE.TaskEither<BackendError, IssueRaw[]> =>
    pipe(
        getIssueCol(),
        TE.chain((col) => TE.tryCatch(() => col.find({}).toArray(), createBackendError(`getIssues`, ErrorTag.database))),
    );

export const getIssueCol = () => pipe(internalMongoClient, E.chain(getInternalDatabase()), TE.fromEither, TE.chain(getCollection<IssueRaw>('issues')));

export const insertIssueToCol = (input: IssuePlain) => (col: Collection<IssueRaw>) =>
    pipe(
        TE.tryCatch(
            () => col.insertOne(input as IssueRaw), // for Mongo insert WithId satisfaction, but id is automatically created by Mongo inself
            createBackendError(`Error while inserting ${JSON.stringify(input)} collection ${col.collectionName}`, ErrorTag.database),
        ),
    );

const prepareIssueDocument = (input: CreateIssueInput): IssuePlain => ({
    content: input.content,
    desc: input.desc,
    name: input.name,
});
