"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = void 0;
const typescript_logging_1 = require("typescript-logging");
const options = new typescript_logging_1.LoggerFactoryOptions()
    .addLogGroupRule(new typescript_logging_1.LogGroupRule(new RegExp('service.+'), typescript_logging_1.LogLevel.Debug))
    .addLogGroupRule(new typescript_logging_1.LogGroupRule(new RegExp('.+'), typescript_logging_1.LogLevel.Info));
exports.factory = typescript_logging_1.LFService.createNamedLoggerFactory('LoggerFactory', options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyQ29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvY29tbW9uL2xvZ2dlci9sb2dnZXJDb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQTBHO0FBRTFHLE1BQU0sT0FBTyxHQUFHLElBQUkseUNBQW9CLEVBQUU7S0FDckMsZUFBZSxDQUFDLElBQUksaUNBQVksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSw2QkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzFFLGVBQWUsQ0FBQyxJQUFJLGlDQUFZLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsNkJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTNELFFBQUEsT0FBTyxHQUFHLDhCQUFTLENBQUMsd0JBQXdCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDIn0=