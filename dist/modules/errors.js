"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBackendError = exports.createApiError = exports.createApplicationError = exports.createDatabaseError = exports.coreError = exports.apiError = exports.applicationError = exports.databaseError = exports.ErrorTag = void 0;
const t = require("io-ts");
// error definitions
var ErrorTag;
(function (ErrorTag) {
    ErrorTag["database"] = "DATABASE";
    ErrorTag["api"] = "API";
})(ErrorTag = exports.ErrorTag || (exports.ErrorTag = {}));
exports.databaseError = t.interface({
    _tag: t.literal('databaseError'),
    errorMessage: t.string,
    rawError: t.unknown,
});
exports.applicationError = t.interface({
    _tag: t.literal('applicationError'),
    errorMessage: t.string,
    rawError: t.unknown,
});
exports.apiError = t.interface({
    _tag: t.literal('apiError'),
    errorMessage: t.string,
    rawError: t.unknown,
});
exports.coreError = t.union([exports.applicationError, exports.databaseError]);
const withErrorProps = (errorMessage, error) => ({
    errorMessage,
    rawError: error,
});
// error creators
const createDatabaseError = (errorMessage) => (error) => ({
    _tag: 'databaseError',
    ...withErrorProps(errorMessage, error),
});
exports.createDatabaseError = createDatabaseError;
const createApplicationError = (errorMessage) => (error) => ({
    _tag: 'applicationError',
    ...withErrorProps(errorMessage, error),
});
exports.createApplicationError = createApplicationError;
const createApiError = (errorMessage) => (error) => ({
    _tag: 'apiError',
    ...withErrorProps(errorMessage, error),
});
exports.createApiError = createApiError;
const createBackendError = (errorMessage, tag) => (error) => ({
    _tag: tag,
    ...withErrorProps(errorMessage, error),
});
exports.createBackendError = createBackendError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZHVsZXMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUEyQjtBQUUzQixvQkFBb0I7QUFFcEIsSUFBWSxRQUdYO0FBSEQsV0FBWSxRQUFRO0lBQ2hCLGlDQUFxQixDQUFBO0lBQ3JCLHVCQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7QUFFWSxRQUFBLGFBQWEsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ3JDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztJQUNoQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDdEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPO0NBQ3RCLENBQUMsQ0FBQztBQUVVLFFBQUEsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4QyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUNuQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDdEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPO0NBQ3RCLENBQUMsQ0FBQztBQUVVLFFBQUEsUUFBUSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQzNCLFlBQVksRUFBRSxDQUFDLENBQUMsTUFBTTtJQUN0QixRQUFRLEVBQUUsQ0FBQyxDQUFDLE9BQU87Q0FDdEIsQ0FBQyxDQUFDO0FBRVUsUUFBQSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHdCQUFnQixFQUFFLHFCQUFhLENBQUMsQ0FBQyxDQUFDO0FBZ0JwRSxNQUFNLGNBQWMsR0FBRyxDQUFDLFlBQW9CLEVBQUUsS0FBYyxFQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLFlBQVk7SUFDWixRQUFRLEVBQUUsS0FBSztDQUNsQixDQUFDLENBQUM7QUFFSCxpQkFBaUI7QUFFVixNQUFNLG1CQUFtQixHQUFHLENBQUMsWUFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFjLEVBQWlCLEVBQUUsQ0FBQyxDQUFDO0lBQzdGLElBQUksRUFBRSxlQUFlO0lBQ3JCLEdBQUcsY0FBYyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7Q0FDekMsQ0FBQyxDQUFDO0FBSFUsUUFBQSxtQkFBbUIsdUJBRzdCO0FBRUksTUFBTSxzQkFBc0IsR0FBRyxDQUFDLFlBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBYyxFQUFvQixFQUFFLENBQUMsQ0FBQztJQUNuRyxJQUFJLEVBQUUsa0JBQWtCO0lBQ3hCLEdBQUcsY0FBYyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7Q0FDekMsQ0FBQyxDQUFDO0FBSFUsUUFBQSxzQkFBc0IsMEJBR2hDO0FBRUksTUFBTSxjQUFjLEdBQUcsQ0FBQyxZQUFvQixFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQWMsRUFBWSxFQUFFLENBQUMsQ0FBQztJQUNuRixJQUFJLEVBQUUsVUFBVTtJQUNoQixHQUFHLGNBQWMsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO0NBQ3pDLENBQUMsQ0FBQztBQUhVLFFBQUEsY0FBYyxrQkFHeEI7QUFNSSxNQUFNLGtCQUFrQixHQUFHLENBQUMsWUFBb0IsRUFBRSxHQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBYyxFQUFnQixFQUFFLENBQUMsQ0FBQztJQUMxRyxJQUFJLEVBQUUsR0FBRztJQUNULEdBQUcsY0FBYyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7Q0FDekMsQ0FBQyxDQUFDO0FBSFUsUUFBQSxrQkFBa0Isc0JBRzVCIn0=