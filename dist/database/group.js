"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const withSystemDates_1 = require("./withs/withSystemDates");
const withErrors_1 = require("./withs/withErrors");
const withSystem_1 = require("./withs/withSystem");
const withGroupAlliances_1 = require("./withs/withGroupAlliances");
exports.groupModelName = 'group';
exports.groupCollectionName = 'groups';
exports.groupSchema = new mongoose_1.Schema({
    ...withErrors_1.withErrorsSchema,
    ...withSystemDates_1.withSystemDatesSchema,
    ...withSystem_1.withSystemSchema,
    ...withGroupAlliances_1.withGroupAlliancesSchema,
    name: {
        type: String,
        required: true,
    },
    descriptionShort: {
        type: String,
        required: false,
    },
    descriptionLong: {
        type: String,
        required: false,
    },
    logo: {
        type: String,
        required: false,
    },
    groupType: {
        type: String,
        required: true,
    },
});
exports.groupModel = mongoose_1.model(exports.groupModelName, exports.groupSchema, exports.groupCollectionName);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZGF0YWJhc2UvZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBd0Q7QUFDeEQsNkRBQStFO0FBQy9FLG1EQUFnRTtBQUNoRSxtREFBZ0U7QUFDaEUsbUVBQXdGO0FBRTNFLFFBQUEsY0FBYyxHQUFHLE9BQU8sQ0FBQztBQUN6QixRQUFBLG1CQUFtQixHQUFHLFFBQVEsQ0FBQztBQWEvQixRQUFBLFdBQVcsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDbEMsR0FBRyw2QkFBZ0I7SUFDbkIsR0FBRyx1Q0FBcUI7SUFDeEIsR0FBRyw2QkFBZ0I7SUFDbkIsR0FBRyw2Q0FBd0I7SUFDM0IsSUFBSSxFQUFFO1FBQ0YsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELGdCQUFnQixFQUFFO1FBQ2QsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsS0FBSztLQUNsQjtJQUNELGVBQWUsRUFBRTtRQUNiLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLEtBQUs7S0FDbEI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxLQUFLO0tBQ2xCO0lBQ0QsU0FBUyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtDQUNKLENBQUMsQ0FBQztBQUVVLFFBQUEsVUFBVSxHQUF5QixnQkFBSyxDQUFnQixzQkFBYyxFQUFFLG1CQUFXLEVBQUUsMkJBQW1CLENBQUMsQ0FBQyJ9