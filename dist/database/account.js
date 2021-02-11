"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const withErrors_1 = require("./withs/withErrors");
const withSystemDates_1 = require("./withs/withSystemDates");
const withSystem_1 = require("./withs/withSystem");
const withGroups_1 = require("./withs/withGroups");
exports.accountSchema = new mongoose_1.Schema({
    ...withErrors_1.withErrorsSchema,
    ...withSystemDates_1.withSystemDatesSchema,
    ...withSystem_1.withSystemSchema,
    ...withGroups_1.withGroupsSchema,
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    passwordRetry: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
});
exports.accountModel = mongoose_1.model('account', exports.accountSchema, 'accounts');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdEO0FBQ3hELG1EQUFnRTtBQUNoRSw2REFBK0U7QUFDL0UsbURBQWdFO0FBQ2hFLG1EQUFnRTtBQWFuRCxRQUFBLGFBQWEsR0FBRyxJQUFJLGlCQUFNLENBQUM7SUFDcEMsR0FBRyw2QkFBZ0I7SUFDbkIsR0FBRyx1Q0FBcUI7SUFDeEIsR0FBRyw2QkFBZ0I7SUFDbkIsR0FBRyw2QkFBZ0I7SUFDbkIsS0FBSyxFQUFFO1FBQ0gsSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELElBQUksRUFBRTtRQUNGLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07UUFDWixRQUFRLEVBQUUsSUFBSTtLQUNqQjtJQUNELGFBQWEsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7SUFDRCxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osQ0FBQyxDQUFDO0FBRVUsUUFBQSxZQUFZLEdBQTJCLGdCQUFLLENBQWtCLFNBQVMsRUFBRSxxQkFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDIn0=