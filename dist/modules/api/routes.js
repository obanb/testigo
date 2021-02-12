"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express = require("express");
const express_1 = require("hyper-ts/lib/express");
const model_1 = require("../issue/model");
const pipeable_1 = require("fp-ts/pipeable");
const H = require("hyper-ts");
const errors_1 = require("../errors");
const PathReporter_1 = require("io-ts/PathReporter");
const common_1 = require("./common");
const mongodb_1 = require("mongodb");
const issue_1 = require("../issue/issue");
const mongo_1 = require("../mongo");
const router = express.Router();
exports.router = router;
const createIssueRequestHandler = pipeable_1.pipe(H.decodeBody(model_1.createIssueInput.decode), H.mapLeft((e) => errors_1.createBackendError(PathReporter_1.failure(e).join('\n'), errors_1.ErrorTag.api)(e)), H.ichain((decoded) => H.fromTaskEither(issue_1.createIssue(decoded))), H.ichain(common_1.sendBodyAndClose('createIssueHandler JSON error')), H.orElse(common_1.withErrorCode(H.Status.BadRequest)));
const getIssueByIdHandler = pipeable_1.pipe(H.decodeParam('id', mongo_1.objectIdstring.decode), H.map((decoded) => new mongodb_1.ObjectID(decoded)), H.mapLeft((e) => errors_1.createBackendError(PathReporter_1.failure(e).join('\n'), errors_1.ErrorTag.api)(e)), H.ichain((decoded) => H.fromTaskEither(issue_1.getIssueById(model_1.isoIssueId.wrap(decoded)))), H.ichain(common_1.sendBodyAndClose('getIssueByIdHandler JSON error')), H.orElse(common_1.withErrorCode(H.Status.BadRequest)));
const getIssuesHandler = pipeable_1.pipe(H.decodeParams(common_1.emptyObject.decode), H.mapLeft((e) => errors_1.createBackendError(PathReporter_1.failure(e).join('\n'), errors_1.ErrorTag.api)(e)), H.ichain((_) => H.fromTaskEither(issue_1.getIssues())), H.ichain(common_1.sendBodyAndClose('getIssuesHandler JSON error')), H.orElse(common_1.withErrorCode(H.Status.BadRequest)));
router.route('/createIssue').post(express_1.toRequestHandler(createIssueRequestHandler));
router.route('/getIssues/id').get(express_1.toRequestHandler(getIssueByIdHandler));
router.route('/getIssues').get(express_1.toRequestHandler(getIssuesHandler));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXBpL3JvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBbUM7QUFDbkMsa0RBQXNEO0FBQ3RELDBDQUE0RDtBQUM1RCw2Q0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCLHNDQUF1RDtBQUN2RCxxREFBMkM7QUFDM0MscUNBQXNFO0FBQ3RFLHFDQUFpQztBQUNqQywwQ0FBb0U7QUFDcEUsb0NBQXdDO0FBRXhDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQWlDeEIsd0JBQU07QUEvQmQsTUFBTSx5QkFBeUIsR0FBRyxlQUFJLENBQ2xDLENBQUMsQ0FBQyxVQUFVLENBQUMsd0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQ3JDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLDJCQUFrQixDQUFDLHNCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFDN0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx5QkFBZ0IsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDLEVBQzNELENBQUMsQ0FBQyxNQUFNLENBQUMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQy9DLENBQUM7QUFFRixNQUFNLG1CQUFtQixHQUFHLGVBQUksQ0FDNUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsc0JBQWMsQ0FBQyxNQUFNLENBQUMsRUFDMUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQ3pDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLDJCQUFrQixDQUFDLHNCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxvQkFBWSxDQUFDLGtCQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvRSxDQUFDLENBQUMsTUFBTSxDQUFDLHlCQUFnQixDQUFDLGdDQUFnQyxDQUFDLENBQUMsRUFDNUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsZUFBSSxDQUN6QixDQUFDLENBQUMsWUFBWSxDQUFDLG9CQUFXLENBQUMsTUFBTSxDQUFDLEVBQ2xDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLDJCQUFrQixDQUFDLHNCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLGlCQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDNUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBUyxFQUFFLENBQUMsQ0FBQyxFQUM5QyxDQUFDLENBQUMsTUFBTSxDQUFDLHlCQUFnQixDQUFDLDZCQUE2QixDQUFDLENBQUMsRUFDekQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FDL0MsQ0FBQztBQUVGLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQUUvRSxNQUFNLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQywwQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7QUFFekUsTUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsMEJBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDIn0=