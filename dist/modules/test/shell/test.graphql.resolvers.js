"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testGraphqlResolvers = void 0;
const testService_1 = require("../core/testService");
exports.testGraphqlResolvers = {
    Queries: {
        test: () => ({
            test: () => testService_1.testService().test(),
        }),
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5ncmFwaHFsLnJlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Rlc3Qvc2hlbGwvdGVzdC5ncmFwaHFsLnJlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBZ0Q7QUFFbkMsUUFBQSxvQkFBb0IsR0FBRztJQUNoQyxPQUFPLEVBQUU7UUFDTCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyx5QkFBVyxFQUFFLENBQUMsSUFBSSxFQUFFO1NBQ25DLENBQUM7S0FDTDtDQUNKLENBQUEifQ==