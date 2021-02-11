"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeable_1 = require("fp-ts/lib/pipeable");
const TE = require("fp-ts/lib/TaskEither");
const accountService_1 = require("../core/accountService");
const resultHandlers_1 = require("../../common/resultHandlers");
exports.accountRestResolvers = {
    mutation: {
        account: () => ({
            register: (req, res, next) => pipeable_1.pipe(req, accountService_1.accountService().register, TE.fold(resultHandlers_1.errorResultStatusTask(res), resultHandlers_1.successResultStatusTask(res)))(),
            login: (req, res, next) => pipeable_1.pipe(req, accountService_1.accountService().login, TE.fold(resultHandlers_1.errorResultStatusTask(res), resultHandlers_1.successResultStatusTask(res)))(),
        }),
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5yZXN0LnJlc29sdmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FjY291bnQvc2hlbGwvYWNjb3VudC5yZXN0LnJlc29sdmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF3QztBQUV4QywyQ0FBMkM7QUFDM0MsMkRBQXNEO0FBQ3RELGdFQUEyRjtBQVc5RSxRQUFBLG9CQUFvQixHQUF5QjtJQUN0RCxRQUFRLEVBQUU7UUFDTixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFLENBQzFELGVBQUksQ0FBQyxHQUFHLEVBQUUsK0JBQWMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHNDQUFxQixDQUFDLEdBQUcsQ0FBQyxFQUFFLHdDQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM3RyxLQUFLLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRSxDQUN2RCxlQUFJLENBQUMsR0FBRyxFQUFFLCtCQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxzQ0FBcUIsQ0FBQyxHQUFHLENBQUMsRUFBRSx3Q0FBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDN0csQ0FBQztLQUNMO0NBQ0osQ0FBQyJ9