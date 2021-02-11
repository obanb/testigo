"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const account_rest_resolvers_1 = require("./account.rest.resolvers");
const accountRouter = express.Router();
exports.accountRouter = accountRouter;
accountRouter
    .route('/register')
    .post(account_rest_resolvers_1.accountRestResolvers.mutation.account().register);
accountRouter
    .route('/login')
    .post(account_rest_resolvers_1.accountRestResolvers.mutation.account().login);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudFJvdXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2FjY291bnQvc2hlbGwvYWNjb3VudFJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyxxRUFBOEQ7QUFFOUQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBVS9CLHNDQUFhO0FBUnJCLGFBQWE7S0FDUixLQUFLLENBQUMsV0FBVyxDQUFDO0tBQ2xCLElBQUksQ0FBQyw2Q0FBb0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFNUQsYUFBYTtLQUNSLEtBQUssQ0FBQyxRQUFRLENBQUM7S0FDZixJQUFJLENBQUMsNkNBQW9CLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDIn0=