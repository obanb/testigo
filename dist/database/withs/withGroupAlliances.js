"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.groupAllianceSchema = {
    group: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'group', index: true },
    alliancePolicy: {
        type: String,
        required: true,
    },
};
exports.withGroupAlliancesSchema = {
    groupAlliances: [exports.groupAllianceSchema]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aEdyb3VwQWxsaWFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RhdGFiYXNlL3dpdGhzL3dpdGhHcm91cEFsbGlhbmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFrRDtBQVlyQyxRQUFBLG1CQUFtQixHQUFxQjtJQUNqRCxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQy9FLGNBQWMsRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FDSixDQUFDO0FBRVcsUUFBQSx3QkFBd0IsR0FBcUI7SUFDdEQsY0FBYyxFQUFFLENBQUMsMkJBQW1CLENBQUM7Q0FDeEMsQ0FBQyJ9