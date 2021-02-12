import * as t from 'io-ts';
import {ObjectId, objectIdstring} from '../mongo';
import {iso, Newtype} from 'newtype-ts';
import {ObjectID} from 'mongodb';


/**
 * Issue models
 */

export const issueId = new t.Type<IssueId, IssueId, any>(
    'issueId',
    (input: any): input is IssueId => ObjectID.isValid(input),
    (input, context) => (ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)),
    t.identity,
);

export const issueName = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly issueName: unique symbol;
        }
        > => n.length > 2 && n.length < 50,
    'issueName',
);
export type IssueName = t.TypeOf<typeof issueName>;

export const issueDesc = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly issueDesc: unique symbol;
        }
        > => n.length > 5 && n.length < 100,
    'issueDesc',
);

export type IssueDesc = t.TypeOf<typeof issueDesc>;

export const issueContent = t.brand(
    t.string,
    (
        n,
    ): n is t.Branded<
        string,
        {
            readonly issueContent: unique symbol;
        }
        > => n.length < 500,
    'issueContent',
);

export type IssueContent = t.TypeOf<typeof issueContent>;

export const issueRaw = t.interface({
    _id: issueId,
    name: issueName,
    desc: issueDesc,
    content: issueContent,
});

export const issuePlain = t.interface({
    name: issueName,
    desc: issueDesc,
    content: issueContent,
});

export const issuePopulated = t.interface({
    _id: issueId,
    name: issueName,
    desc: issueDesc,
    content: issueContent,
});

export const createIssueInput = t.interface({
    name: issueName,
    desc: issueDesc,
    content: issueContent,
});

export const getIssueInput = t.interface({
    id: objectIdstring,
});

export interface IssueId extends Newtype<{readonly IssueId: unique symbol}, ObjectId> {}
export const isoIssueId = iso<IssueId>();

export type IssueRaw = t.TypeOf<typeof issueRaw>;
export type IssuePlain = t.TypeOf<typeof issuePlain>;
export type IssuePopulated = t.TypeOf<typeof issuePopulated>;
export type CreateIssueInput = t.TypeOf<typeof createIssueInput>;

