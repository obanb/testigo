"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBodyAndClose = exports.withErrorCode = void 0;
const pipeable_1 = require("fp-ts/pipeable");
const H = require("hyper-ts");
const errors_1 = require("../errors");
const withErrorCode = (status) => (message) => pipeable_1.pipe(H.status(status), H.ichain(() => H.closeHeaders()), H.ichain(() => H.send(message.errorMessage)));
exports.withErrorCode = withErrorCode;
const sendBodyAndClose = (message) => (body) => pipeable_1.pipe(H.status(H.Status.OK), H.ichain(() => H.json(body, errors_1.createBackendError(message, errors_1.ErrorTag.api))));
exports.sendBodyAndClose = sendBodyAndClose;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvYXBpL2NvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBb0M7QUFDcEMsOEJBQThCO0FBQzlCLHNDQUFxRTtBQUk5RCxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBcUIsRUFBRSxFQUFFLENBQ2pGLGVBQUksQ0FDQSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUNoQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQy9DLENBQUM7QUFMTyxRQUFBLGFBQWEsaUJBS3BCO0FBR0MsTUFBTSxnQkFBZ0IsR0FBRyxDQUFRLE9BQWUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLGVBQUksQ0FDNUUsQ0FBQyxDQUFDLE1BQU0sQ0FBZSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUNuQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDJCQUFrQixDQUFDLE9BQU8sRUFBRSxpQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDMUUsQ0FBQztBQUhXLFFBQUEsZ0JBQWdCLG9CQUczQiJ9