"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emptyObject = exports.sendBodyAndClose = exports.withErrorCode = void 0;
const pipeable_1 = require("fp-ts/pipeable");
const H = require("hyper-ts");
const errors_1 = require("../errors");
const t = require("io-ts");
const withErrorCode = (status) => (message) => pipeable_1.pipe(H.status(status), H.ichain(() => H.closeHeaders()), H.ichain(() => H.send(message.errorMessage)));
exports.withErrorCode = withErrorCode;
const sendBodyAndClose = (message) => (body) => pipeable_1.pipe(H.status(H.Status.OK), H.ichain(() => H.json(body, errors_1.createBackendError(message, errors_1.ErrorTag.api))));
exports.sendBodyAndClose = sendBodyAndClose;
exports.emptyObject = t.interface({});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXBpL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCLHNDQUFxRTtBQUNyRSwyQkFBMkI7QUFJcEIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUF3QixFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQXFCLEVBQUUsRUFBRSxDQUNqRixlQUFJLENBQ0EsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsRUFDaEMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUMvQyxDQUFDO0FBTE8sUUFBQSxhQUFhLGlCQUtwQjtBQUdDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBUSxPQUFlLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBVSxFQUFFLEVBQUUsQ0FBQyxlQUFJLENBQzVFLENBQUMsQ0FBQyxNQUFNLENBQWUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFDbkMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSwyQkFBa0IsQ0FBQyxPQUFPLEVBQUUsaUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzFFLENBQUM7QUFIVyxRQUFBLGdCQUFnQixvQkFHM0I7QUFFVyxRQUFBLFdBQVcsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFBIn0=