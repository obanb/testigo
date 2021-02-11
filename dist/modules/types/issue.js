"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIssueInput = exports.issuePopulated = exports.issueRaw = exports.issueContent = exports.issueDesc = exports.issueName = void 0;
const t = require("io-ts");
const common_1 = require("./common");
const newtype_ts_1 = require("newtype-ts");
exports.issueName = t.brand(t.string, (n) => n.length > 2 && n.length < 50, 'issueName');
exports.issueDesc = t.brand(t.string, (n) => n.length > 5 && n.length < 100, 'issueDesc');
exports.issueContent = t.brand(t.string, (n) => n.length < 500, 'issueContent');
exports.issueRaw = t.interface({
    _tag: t.literal('issueRaw'),
    _id: common_1.objectId,
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
exports.issuePopulated = t.interface({
    _tag: t.literal('issuePopulated'),
    _id: common_1.objectId,
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
exports.createIssueInput = t.interface({
    name: exports.issueName,
    desc: exports.issueDesc,
    content: exports.issueContent,
});
const isoIssueId = newtype_ts_1.iso();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy90eXBlcy9pc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBMkI7QUFDM0IscUNBQTRDO0FBQzVDLDJDQUF3QztBQUUzQixRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUM1QixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1ILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFDbEMsV0FBVyxDQUNkLENBQUM7QUFHVyxRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUM1QixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1ILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDbkMsV0FBVyxDQUNkLENBQUM7QUFJVyxRQUFBLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUMvQixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1DLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFDdkIsY0FBYyxDQUNqQixDQUFDO0FBS1csUUFBQSxRQUFRLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7SUFDM0IsR0FBRyxFQUFFLGlCQUFRO0lBQ2IsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsT0FBTyxFQUFFLG9CQUFZO0NBQ3hCLENBQUMsQ0FBQztBQUVVLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDdEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7SUFDakMsR0FBRyxFQUFFLGlCQUFRO0lBQ2IsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsSUFBSSxFQUFFLGlCQUFTO0lBQ2YsT0FBTyxFQUFFLG9CQUFZO0NBQ3hCLENBQUMsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxJQUFJLEVBQUUsaUJBQVM7SUFDZixJQUFJLEVBQUUsaUJBQVM7SUFDZixPQUFPLEVBQUUsb0JBQVk7Q0FDeEIsQ0FBQyxDQUFDO0FBR0gsTUFBTSxVQUFVLEdBQUcsZ0JBQUcsRUFBVyxDQUFDIn0=