"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIssueById = exports.createIssue = exports.insertIssueToCol = exports.getIssueCol = exports.isoIssueId = exports.getIssueInput = exports.createIssueInput = exports.issuePopulated = exports.issuePlain = exports.issueRaw = exports.issueContent = exports.issueDesc = exports.issueName = void 0;
const pipeable_1 = require("fp-ts/pipeable");
const Server_1 = require("../server/Server");
const t = require("io-ts");
const newtype_ts_1 = require("newtype-ts");
const E = require("fp-ts/Either");
const TE = require("fp-ts/TaskEither");
const mongoInternal_1 = require("./mongoInternal");
const mongo_1 = require("./mongo");
const errors_1 = require("./errors");
const A = require("fp-ts/Array");
exports.issueName = t.brand(t.string, (n) => n.length > 2 && n.length < 50, 'issueName');
exports.issueDesc = t.brand(t.string, (n) => n.length > 5 && n.length < 100, 'issueDesc');
exports.issueContent = t.brand(t.string, (n) => n.length < 500, 'issueContent');
exports.issueRaw = t.interface({
    _id: mongo_1.objectId,
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
exports.issuePlain = t.interface({
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
exports.issuePopulated = t.interface({
    _id: mongo_1.objectId,
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
exports.createIssueInput = t.interface({
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
exports.getIssueInput = t.interface({
    id: mongo_1.objectIdstring,
});
exports.isoIssueId = newtype_ts_1.iso();
const getIssueCol = () => pipeable_1.pipe(Server_1.internalMongoClient, E.chain(mongoInternal_1.getInternalDatabase()), TE.fromEither, TE.chain(mongo_1.getCollection('issues')));
exports.getIssueCol = getIssueCol;
const insertIssueToCol = (input) => (col) => TE.tryCatch(() => col.insertOne(input), errors_1.createBackendError(`Error while inserting ${JSON.stringify(input)} collection ${col.collectionName}`, errors_1.ErrorTag.database));
exports.insertIssueToCol = insertIssueToCol;
const createIssue = (input) => pipeable_1.pipe(exports.getIssueCol(), TE.chain(exports.insertIssueToCol(prepareIssueDocument(input))), TE.chain((res) => pipeable_1.pipe(res.ops, A.lookup(0), E.fromOption(() => errors_1.createBackendError('Empty response ops', errors_1.ErrorTag.database)({})), E.chainW(exports.issuePlain.decode), E.mapLeft(errors_1.createBackendError('Response format error', errors_1.ErrorTag.database)), TE.fromEither)));
exports.createIssue = createIssue;
const getIssueById = (id) => {
    return pipeable_1.pipe(exports.getIssueCol(), TE.chain((col) => TE.tryCatch(() => col.findOne({ _id: id }), errors_1.createBackendError(`getIssueById error with id: ${String(id)})`, errors_1.ErrorTag.database))));
};
exports.getIssueById = getIssueById;
const prepareIssueDocument = (input) => ({
    content: input.content,
    desc: input.desc,
    name: input.name,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBb0M7QUFDcEMsNkNBQXFEO0FBQ3JELDJCQUEyQjtBQUMzQiwyQ0FBd0M7QUFFeEMsa0NBQWtDO0FBQ2xDLHVDQUF1QztBQUN2QyxtREFBb0Q7QUFDcEQsbUNBQTBFO0FBQzFFLHFDQUFvRTtBQUNwRSxpQ0FBaUM7QUFHcEIsUUFBQSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDNUIsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUNJLENBQUMsRUFNSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQ2xDLFdBQVcsQ0FDZCxDQUFDO0FBR1csUUFBQSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDNUIsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUNJLENBQUMsRUFNSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQ25DLFdBQVcsQ0FDZCxDQUFDO0FBSVcsUUFBQSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDL0IsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUNJLENBQUMsRUFNSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQ25CLGNBQWMsQ0FDakIsQ0FBQztBQUlXLFFBQUEsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEMsR0FBRyxFQUFFLGdCQUFRO0lBQ2IsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsT0FBTyxFQUFFLG9CQUFZO0NBQ3hCLENBQUMsQ0FBQztBQUVVLFFBQUEsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEMsSUFBSSxFQUFFLGlC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