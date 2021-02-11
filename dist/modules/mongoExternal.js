"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExternalDatabase = exports.getConnectedExternalClient = exports.isoExternalMongoUri = exports.isoExternalMongoClientOptions = void 0;
const mongodb_1 = require("mongodb");
const TE = require("fp-ts/TaskEither");
const E = require("fp-ts/Either");
const errors_1 = require("./errors");
const newtype_ts_1 = require("newtype-ts");
const pipeable_1 = require("fp-ts/lib/pipeable");
exports.isoExternalMongoClientOptions = newtype_ts_1.iso();
const isoExternalMongoClient = newtype_ts_1.iso();
exports.isoExternalMongoUri = newtype_ts_1.iso();
const getConnectedExternalClient = (uri, options) => pipeable_1.pipe(TE.tryCatch(async () => mongodb_1.MongoClient.connect(exports.isoExternalMongoUri.unwrap(uri), exports.isoExternalMongoClientOptions.unwrap(options)), errors_1.createBackendError(`Get external database client error.`, errors_1.ErrorTag.database)), TE.map(isoExternalMongoClient.wrap));
exports.getConnectedExternalClient = getConnectedExternalClient;
const getExternalDatabase = (name) => (client) => E.tryCatch(() => isoExternalMongoClient.unwrap(client).db(name ? name : null), errors_1.createBackendError(`Get external database ${name} error.`, errors_1.ErrorTag.database));
exports.getExternalDatabase = getExternalDatabase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29FeHRlcm5hbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL21vbmdvRXh0ZXJuYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQTREO0FBQzVELHVDQUF1QztBQUN2QyxrQ0FBa0M7QUFDbEMscUNBQW9FO0FBQ3BFLDJDQUF3QztBQUN4QyxpREFBd0M7QUFLM0IsUUFBQSw2QkFBNkIsR0FBRyxnQkFBRyxFQUE4QixDQUFDO0FBQy9FLE1BQU0sc0JBQXNCLEdBQUcsZ0JBQUcsRUFBdUIsQ0FBQztBQUk3QyxRQUFBLG1CQUFtQixHQUFHLGdCQUFHLEVBQW9CLENBQUM7QUFFcEQsTUFBTSwwQkFBMEIsR0FBRyxDQUFDLEdBQXFCLEVBQUUsT0FBb0MsRUFBRSxFQUFFLENBQ3RHLGVBQUksQ0FDQSxFQUFFLENBQUMsUUFBUSxDQUNQLEtBQUssSUFBSSxFQUFFLENBQ1AscUJBQVcsQ0FBQyxPQUFPLENBQ2YsMkJBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUMvQixxQ0FBNkIsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hELEVBQ0wsMkJBQWtCLENBQUMscUNBQXFDLEVBQUUsaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDL0UsRUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUN0QyxDQUFDO0FBWE8sUUFBQSwwQkFBMEIsOEJBV2pDO0FBRUMsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLElBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUEyQixFQUFFLEVBQUUsQ0FDbEYsQ0FBQyxDQUFDLFFBQVEsQ0FDTixHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDbEUsMkJBQWtCLENBQUMseUJBQXlCLElBQUksU0FBUyxFQUFFLGlCQUFRLENBQUMsUUFBUSxDQUFDLENBQ2hGLENBQUM7QUFKTyxRQUFBLG1CQUFtQix1QkFJMUIifQ==