"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dateUtils_1 = require("./dateUtils");
exports.withCreatedAndUpdated = (obj) => {
    const now = dateUtils_1.getNow();
    obj.createdAt = now;
    obj.lastUpdate = now;
    return obj;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbW9kdWxlcy9jb21tb24vd2l0aHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBbUM7QUFFdEIsUUFBQSxxQkFBcUIsR0FBRyxDQUFrRCxHQUFNLEVBQUUsRUFBRTtJQUM3RixNQUFNLEdBQUcsR0FBRyxrQkFBTSxFQUFFLENBQUM7SUFDckIsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDcEIsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDckIsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUMifQ==