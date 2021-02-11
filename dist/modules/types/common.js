"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectId = void 0;
const t = require("io-ts");
const mongodb_1 = require("mongodb");
exports.objectId = new t.Type('objectId', (input) => mongodb_1.ObjectID.isValid(input), (input, context) => (mongodb_1.ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)), t.identity);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21vZHVsZXMvdHlwZXMvY29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJCQUEyQjtBQUMzQixxQ0FBaUM7QUFHcEIsUUFBQSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM5QixVQUFVLEVBQ1YsQ0FBQyxLQUFVLEVBQXFCLEVBQUUsQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDMUQsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUM1RixDQUFDLENBQUMsUUFBUSxDQUNiLENBQUMifQ==