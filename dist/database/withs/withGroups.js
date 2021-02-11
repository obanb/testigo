"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.groupsSchema = {
    group: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: 'group', index: true },
    accessPolicy: {
        type: String,
        required: true,
    },
};
exports.withGroupsSchema = {
    groups: [exports.groupsSchema],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aEdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS93aXRocy93aXRoR3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWtEO0FBWXJDLFFBQUEsWUFBWSxHQUFxQjtJQUMxQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsaUJBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFDO0lBQy9FLFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLElBQUk7S0FDakI7Q0FDSixDQUFDO0FBRVcsUUFBQSxnQkFBZ0IsR0FBcUI7SUFDOUMsTUFBTSxFQUFFLENBQUMsb0JBQVksQ0FBQztDQUN6QixDQUFDIn0=