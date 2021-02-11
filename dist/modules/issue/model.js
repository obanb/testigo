"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isoIssueId = exports.getIssueInput = exports.createIssueInput = exports.issuePopulated = exports.issuePlain = exports.issueRaw = exports.issueContent = exports.issueDesc = exports.issueName = exports.issueId = void 0;
const t = require("io-ts");
const mongo_1 = require("../mongo");
const newtype_ts_1 = require("newtype-ts");
const mongodb_1 = require("mongodb");
/**
 * Issue models
 */
exports.issueId = new t.Type('objectId', (input) => mongodb_1.ObjectID.isValid(input), (input, context) => (mongodb_1.ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)), t.identity);
exports.issueName = t.brand(t.string, (n) => n.length > 2 && n.length < 50, 'issueName');
exports.issueDesc = t.brand(t.string, (n) => n.length > 5 && n.length < 100, 'issueDesc');
exports.issueContent = t.brand(t.string, (n) => n.length < 500, 'issueContent');
exports.issueRaw = t.interface({
    _id: exports.issueId,
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
    _id: exports.issueId,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9pc3N1ZS9tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBMkI7QUFDM0Isb0NBQTREO0FBQzVELDJDQUF3QztBQUN4QyxxQ0FBaUM7QUFHakM7O0dBRUc7QUFFVSxRQUFBLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQVUsRUFDVixDQUFDLEtBQVUsRUFBb0IsRUFBRSxDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUN6RCxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQzVGLENBQUMsQ0FBQyxRQUFRLENBQ2IsQ0FBQztBQUVXLFFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQzVCLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUN0QyxXQUFXLENBQ2QsQ0FBQztBQUdXLFFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQzVCLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUN2QyxXQUFXLENBQ2QsQ0FBQztBQUlXLFFBQUEsWUFBWSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQy9CLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUN2QixjQUFjLENBQ2pCLENBQUM7QUFJVyxRQUFBLFFBQVEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hDLEdBQUcsRUFBRSxlQUFPO0lBQ1osSUFBSSxFQUFFLGlCQUFTO0lBQ2YsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsT0FBTyxFQUFFLG9CQUFZO0NBQ3hCLENBQUMsQ0FBQztBQUVVLFFBQUEsVUFBVSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEMsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsT0FBTyxFQUFFLG9CQUFZO0NBQ3hCLENBQUMsQ0FBQztBQUVVLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEMsR0FBRyxFQUFFLGVBQU87SUFDWixJQUFJLEVBQUUsaUJBQVM7SUFDZixJQUFJLEVBQUUsaUJBQVM7SUFDZixPQUFPLEVBQUUsb0JBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hDLElBQUksRUFBRSxpQkFBUztJQUNmLElBQUksRUFBRSxpQkFBUztJQUNmLE9BQU8sRUFBRSxvQkFBWTtDQUN4QixDQUFDLENBQUM7QUFFVSxRQUFBLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JDLEVBQUUsRUFBRSxzQkFBYztDQUNyQixDQUFDLENBQUM7QUFHVSxRQUFBLFVBQVUsR0FBRyxnQkFBRyxFQUFXLENBQUMifQ==