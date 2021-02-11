"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testService = void 0;
const logger_1 = require("../../common/logger");
const pipeable_1 = require("fp-ts/pipeable");
const errors_1 = require("../../errors");
const log = logger_1.logger(logger_1.factory.getLogger('testService'));
const testService = () => ({
    test: () => {
        const res = pipeable_1.pipe({ pes: 'ffef' }, errors_1.databaseError.decode);
    },
});
exports.testService = testService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy90ZXN0L2NvcmUvdGVzdFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0RBQW9EO0FBQ3BELDZDQUFvQztBQUNwQyx5Q0FBMkM7QUFFM0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLGdCQUFPLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFHOUMsTUFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5QixJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQ1QsTUFBTSxHQUFHLEdBQUcsZUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFDLE1BQU0sRUFBQyxFQUFFLHNCQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDdEQsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUpVLFFBQUEsV0FBVyxlQUlyQiJ9