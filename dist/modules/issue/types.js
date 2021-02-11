"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isoIssueId = exports.getIssueInput = exports.createIssueInput = exports.issuePopulated = exports.issuePlain = exports.issueRaw = exports.issueContent = exports.issueDesc = exports.issueName = void 0;
const t = require("io-ts");
const mongo_1 = require("../mongo");
const newtype_ts_1 = require("newtype-ts");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9pc3N1ZS90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBMkI7QUFDM0Isb0NBQTREO0FBQzVELDJDQUF3QztBQUUzQixRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUM1QixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1DLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFDdEMsV0FBVyxDQUNkLENBQUM7QUFHVyxRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUM1QixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1DLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDdkMsV0FBVyxDQUNkLENBQUM7QUFJVyxRQUFBLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUMvQixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1DLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDdkIsY0FBYyxDQUNqQixDQUFDO0FBSVcsUUFBQSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxHQUFHLEVBQUUsZ0JBQVE7SUFDYixJQUFJLEVBQUUsaUJBQVM7SUFDZixJQUFJLEVBQUUsaUJBQVM7SUFDZixPQUFPLEVBQUUsb0JBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxVQUFVLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNsQyxJQUFJLEVBQUUsaUJBQVM7SUFDZixJQUFJLEVBQUUsaUJBQVM7SUFDZixPQUFPLEVBQUUsb0JBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN0QyxHQUFHLEVBQUUsZ0JBQVE7SUFDYixJQUFJLEVBQUUsaUJBQVM7SUFDZixJQUFJLEVBQUUsaUJBQVM7SUFDZixPQUFPLEVBQUUsb0JBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3hDLElBQUksRUFBRSxpQkFBUztJQUNmLElBQUksRUFBRSxpQkFBUztJQUNmLE9BQU8sRUFBRSxvQkFBWTtDQUN4QixDQUFDLENBQUM7QUFFVSxRQUFBLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JDLEVBQUUsRUFBRSxzQkFBYztDQUNyQixDQUFDLENBQUM7QUFHVSxRQUFBLFVBQVUsR0FBRyxnQkFBRyxFQUFXLENBQUMifQ==