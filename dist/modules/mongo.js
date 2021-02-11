"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.objectIdstring = exports.objectId = void 0;
const mongodb_1 = require("mongodb");
const TE = require("fp-ts/TaskEither");
const errors_1 = require("./errors");
const t = require("io-ts");
exports.objectId = new t.Type('objectId', (input) => mongodb_1.ObjectID.isValid(input), (input, context) => (mongodb_1.ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)), t.identity);
exports.objectIdstring = t.brand(t.string, (n) => n.length === 24, 'objectIdstring');
const getCollection = (name) => (database) => TE.tryCatch(async () => database.collection(name), errors_1.createBackendError(`Get database collection ${name} error.`, errors_1.ErrorTag.database));
exports.getCollection = getCollection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy9tb25nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBaUQ7QUFDakQsdUNBQXVDO0FBQ3ZDLHFDQUFvRTtBQUNwRSwyQkFBMkI7QUFFZCxRQUFBLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzlCLFVBQVUsRUFDVixDQUFDLEtBQVUsRUFBcUIsRUFBRSxDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUMxRCxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsa0JBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQzVGLENBQUMsQ0FBQyxRQUFRLENBQ2IsQ0FBQztBQUdXLFFBQUEsY0FBYyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQ2pDLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUNwQixnQkFBZ0IsQ0FDbkIsQ0FBQztBQVFLLE1BQU0sYUFBYSxHQUFHLENBQU8sSUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVksRUFBRSxFQUFFLENBQ2xFLEVBQUUsQ0FBQyxRQUFRLENBQ1AsS0FBSyxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUNyQywyQkFBa0IsQ0FBQywyQkFBMkIsSUFBSSxTQUFTLEVBQUUsaUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FDbEYsQ0FBQztBQUpPLFFBQUEsYUFBYSxpQkFJcEIifQ==