"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInternalDatabase = exports.getConnectedInternalClient = exports.isoInternalMongoUri = exports.isoInternalMongoClientOptions = void 0;
const mongodb_1 = require("mongodb");
const TE = require("fp-ts/TaskEither");
const E = require("fp-ts/Either");
const errors_1 = require("./errors");
const newtype_ts_1 = require("newtype-ts");
const pipeable_1 = require("fp-ts/lib/pipeable");
exports.isoInternalMongoClientOptions = newtype_ts_1.iso();
const isoInternalMongoClient = newtype_ts_1.iso();
exports.isoInternalMongoUri = newtype_ts_1.iso();
const getConnectedInternalClient = (uri, options) => pipeable_1.pipe(TE.tryCatch(async () => mongodb_1.MongoClient.connect(exports.isoInternalMongoUri.unwrap(uri), exports.isoInternalMongoClientOptions.unwrap(options)), errors_1.createBackendError(`Get internal database client error.`, errors_1.ErrorTag.database)), TE.map(isoInternalMongoClient.wrap));
exports.getConnectedInternalClient = getConnectedInternalClient;
const getInternalDatabase = (name) => (client) => E.tryCatch(() => isoInternalMongoClient.unwrap(client).db(name ? name : null), errors_1.createBackendError(`Get internal database client error.`, errors_1.ErrorTag.database));
exports.getInternalDatabase = getInternalDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29JbnRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL21vbmdvSW50ZXJuYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTREO0FBQzVELHVDQUF1QztBQUN2QyxrQ0FBa0M7QUFDbEMscUNBQW9FO0FBQ3BFLDJDQUF3QztBQUN4QyxpREFBd0M7QUFLM0IsUUFBQSw2QkFBNkIsR0FBRyxnQkFBRyxFQUE4QixDQUFDO0FBQy9FLE1BQU0sc0JBQXNCLEdBQUcsZ0JBQUcsRUFBdUIsQ0FBQztBQUk3QyxRQUFBLG1CQUFtQixHQUFHLGdCQUFHLEVBQW9CLENBQUM7QUFFcEQsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLEdBQXFCLEVBQUUsT0FBb0MsRUFBb0QsRUFBRSxDQUN4SixlQUFJLENBQ0EsRUFBRSxDQUFDLFFBQVEsQ0FDUCxLQUFLLElBQUksRUFBRSxDQUNQLHFCQUFXLENBQUMsT0FBTyxDQUNmLDJCQUFtQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDL0IscUNBQTZCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoRCxFQUNMLDJCQUFrQixDQUFDLHFDQUFxQyxFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQy9FLEVBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FDdEMsQ0FBQztBQVhPLFFBQUEsMEJBQTBCLDhCQVdqQztBQUNDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxJQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBMkIsRUFBRSxFQUFFLENBQ2xGLENBQUMsQ0FBQyxRQUFRLENBQ04sR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ2xFLDJCQUFrQixDQUFDLHFDQUFxQyxFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQy9FLENBQUM7QUFKTyxRQUFBLG1CQUFtQix1QkFJMUIifQ==