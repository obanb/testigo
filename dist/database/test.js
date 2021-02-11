"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.testSchema = new mongoose_1.Schema({
    test: {
        type: String,
        required: true,
    },
});
exports.testModel = mongoose_1.model('test', exports.testSchema, 'tests');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXdEO0FBUTNDLFFBQUEsVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBQztJQUNqQyxJQUFJLEVBQUU7UUFDRixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxJQUFJO0tBQ2pCO0NBQ0osQ0FBQyxDQUFDO0FBRVUsUUFBQSxTQUFTLEdBQXdCLGdCQUFLLENBQWUsTUFBTSxFQUFFLGtCQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMifQ==