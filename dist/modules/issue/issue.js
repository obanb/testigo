"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertIssueToCol = exports.getIssueCol = exports.getIssues = exports.getIssueById = exports.createIssue = void 0;
const pipeable_1 = require("fp-ts/pipeable");
const Server_1 = require("../../server/Server");
const E = require("fp-ts/Either");
const TE = require("fp-ts/TaskEither");
const mongoInternal_1 = require("../mongoInternal");
const mongo_1 = require("../mongo");
const errors_1 = require("../errors");
const A = require("fp-ts/Array");
const model_1 = require("./model");
const createIssue = (input) => pipeable_1.pipe(exports.getIssueCol(), TE.chain(exports.insertIssueToCol(prepareIssueDocument(input))), TE.chain((res) => pipeable_1.pipe(res.ops, A.lookup(0), E.fromOption(() => errors_1.createBackendError('Empty response ops', errors_1.ErrorTag.database)({})), E.chainW(model_1.issueRaw.decode), E.mapLeft(errors_1.createBackendError('Response format error', errors_1.ErrorTag.database)), TE.fromEither)));
exports.createIssue = createIssue;
const getIssueById = (id) => pipeable_1.pipe(exports.getIssueCol(), TE.chain((col) => TE.tryCatch(() => col.findOne({ _id: id }), errors_1.createBackendError(`getIssueById error with id: ${String(id)})`, errors_1.ErrorTag.database))));
exports.getIssueById = getIssueById;
const getIssues = () => pipeable_1.pipe(exports.getIssueCol(), TE.chain((col) => TE.tryCatch(() => col.find({}).toArray(), errors_1.createBackendError(`getIssues`, errors_1.ErrorTag.database))));
exports.getIssues = getIssues;
const getIssueCol = () => pipeable_1.pipe(Server_1.internalMongoClient, E.chain(mongoInternal_1.getInternalDatabase()), TE.fromEither, TE.chain(mongo_1.getCollection('issues')));
exports.getIssueCol = getIssueCol;
const insertIssueToCol = (input) => (col) => pipeable_1.pipe(TE.tryCatch(() => col.insertOne(input), // for Mongo insert WithId satisfaction, but id is automatically created by Mongo inself
errors_1.createBackendError(`Error while inserting ${JSON.stringify(input)} collection ${col.collectionName}`, errors_1.ErrorTag.database)));
exports.insertIssueToCol = insertIssueToCol;
const prepareIssueDocument = (input) => ({
    content: input.content,
    desc: input.desc,
    name: input.name,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9pc3N1ZS9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBb0M7QUFDcEMsZ0RBQXdEO0FBQ3hELGtDQUFrQztBQUNsQyx1Q0FBdUM7QUFDdkMsb0RBQXFEO0FBQ3JELG9DQUF1QztBQUN2QyxzQ0FBcUU7QUFDckUsaUNBQWlDO0FBRWpDLG1DQUFrRjtBQUUzRSxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXVCLEVBQXlDLEVBQUUsQ0FDMUYsZUFBSSxDQUNBLG1CQUFXLEVBQUUsRUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLHdCQUFnQixDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDdkQsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ2IsZUFBSSxDQUNBLEdBQUcsQ0FBQyxHQUFHLEVBQ1AsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFDWCxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUFrQixDQUFDLG9CQUFvQixFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFDbkYsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBUSxDQUFDLE1BQU0sQ0FBQyxFQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLDJCQUFrQixDQUFDLHVCQUF1QixFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDekUsRUFBRSxDQUFDLFVBQVUsQ0FDaEIsQ0FDSixDQUNKLENBQUM7QUFkTyxRQUFBLFdBQVcsZUFjbEI7QUFFQyxNQUFNLFlBQVksR0FBRyxDQUFDLEVBQVcsRUFBeUMsRUFBRSxDQUMvRSxlQUFJLENBQ0EsbUJBQVcsRUFBRSxFQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUNiLEVBQUUsQ0FBQyxRQUFRLENBQ1AsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBVyxFQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxFQUN0QywyQkFBa0IsQ0FBQywrQkFBK0IsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDdEYsQ0FDSixDQUNKLENBQUM7QUFUTyxRQUFBLFlBQVksZ0JBU25CO0FBRUMsTUFBTSxTQUFTLEdBQUcsR0FBNEMsRUFBRSxDQUNuRSxlQUFJLENBQ0EsbUJBQVcsRUFBRSxFQUNiLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSwyQkFBa0IsQ0FBQyxXQUFXLEVBQUUsaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQ25ILENBQUM7QUFKTyxRQUFBLFNBQVMsYUFJaEI7QUFFQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxlQUFJLENBQUMsNEJBQW1CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxtQ0FBbUIsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFhLENBQVcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQTFJLFFBQUEsV0FBVyxlQUErSDtBQUVoSixNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUF5QixFQUFFLEVBQUUsQ0FDakYsZUFBSSxDQUNBLEVBQUUsQ0FBQyxRQUFRLENBQ1AsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFpQixDQUFDLEVBQUUsd0ZBQXdGO0FBQ2hJLDJCQUFrQixDQUFDLHlCQUF5QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxpQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUMzSCxDQUNKLENBQUM7QUFOTyxRQUFBLGdCQUFnQixvQkFNdkI7QUFFTixNQUFNLG9CQUFvQixHQUFHLENBQUMsS0FBdUIsRUFBYyxFQUFFLENBQUMsQ0FBQztJQUNuRSxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87SUFDdEIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO0lBQ2hCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtDQUNuQixDQUFDLENBQUMifQ==