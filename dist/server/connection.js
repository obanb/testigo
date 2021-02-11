"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnectedClient = exports.connectClient = exports.databaseUri = void 0;
const mongodb_1 = require("mongodb");
const TE = require("fp-ts/TaskEither");
const O = require("fp-ts/Option");
const errors_1 = require("../modules/errors");
const pipeable_1 = require("fp-ts/pipeable");
exports.databaseUri = 'mongodb://localhost:27017/localhost';
const connectClient = (uri, options) => TE.tryCatch(async () => mongodb_1.MongoClient.connect(uri, options), errors_1.createDatabaseError(`Get database client error.`));
exports.connectClient = connectClient;
const getConnectedClient = (connection) => () => pipeable_1.pipe(connection, O.fromEither);
exports.getConnectedClient = getConnectedClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0Q7QUFDeEQsdUNBQXVDO0FBRXZDLGtDQUFrQztBQUNsQyw4Q0FBcUU7QUFDckUsNkNBQW9DO0FBR3ZCLFFBQUEsV0FBVyxHQUFHLHFDQUFxQyxDQUFDO0FBRTFELE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBVyxFQUFFLE9BQTRCLEVBQUUsRUFBRSxDQUN2RSxFQUFFLENBQUMsUUFBUSxDQUE2QixLQUFLLElBQUksRUFBRSxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFBRSw0QkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7QUFEakksUUFBQSxhQUFhLGlCQUNvSDtBQUV2SSxNQUFNLGtCQUFrQixHQUFHLENBQUMsVUFBZ0QsRUFBK0IsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUN4SCxlQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQURuQixRQUFBLGtCQUFrQixzQkFDQyJ9