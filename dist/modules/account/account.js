"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAccountInput = exports.createAccountInput = exports.accountRaw = exports.loginPassword = exports.accountEmail = exports.accountSurname = exports.accountName = exports.accountId = void 0;
const t = require("io-ts");
const mongodb_1 = require("mongodb");
/**
 * Account models
 */
exports.accountId = new t.Type('accountId', (input) => mongodb_1.ObjectID.isValid(input), (input, context) => (mongodb_1.ObjectID.isValid(input) ? t.success(input) : t.failure(input, context)), t.identity);
exports.accountName = t.brand(t.string, (n) => n.length > 3 && n.length < 30, 'accountName');
exports.accountSurname = t.brand(t.string, (n) => n.length > 2 && n.length < 30, 'accountSurname');
exports.accountEmail = t.brand(t.string, (n) => n.length > 2 && n.length < 30, 'accountEmail');
exports.loginPassword = t.brand(t.string, (n) => n.length > 6 && n.length < 30, 'loginPassword');
exports.accountRaw = t.interface({
    _id: exports.accountId,
    name: exports.accountName,
    surname: exports.accountSurname,
    email: exports.accountEmail,
    password: t.string,
    salt: t.string,
    aktivni: t.boolean,
});
exports.createAccountInput = t.interface({
    name: exports.accountName,
    surname: exports.accountSurname,
    password: exports.loginPassword,
    email: exports.accountEmail,
});
exports.loginAccountInput = t.interface({
    email: exports.accountEmail,
    password: exports.loginPassword,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2FjY291bnQvYWNjb3VudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQkFBMkI7QUFDM0IscUNBQWlDO0FBR2pDOztHQUVHO0FBRVUsUUFBQSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMvQixXQUFXLEVBQ1gsQ0FBQyxLQUFVLEVBQXNCLEVBQUUsQ0FBQyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFDM0QsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUM1RixDQUFDLENBQUMsUUFBUSxDQUNiLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUM5QixDQUFDLENBQUMsTUFBTSxFQUNSLENBQ0ksQ0FBQyxFQU1ILEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFDbEMsYUFBYSxDQUNoQixDQUFDO0FBR1csUUFBQSxjQUFjLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDakMsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUNJLENBQUMsRUFNSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQ2xDLGdCQUFnQixDQUNuQixDQUFDO0FBR1csUUFBQSxZQUFZLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FDL0IsQ0FBQyxDQUFDLE1BQU0sRUFDUixDQUNJLENBQUMsRUFNSCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQ2xDLGNBQWMsQ0FDakIsQ0FBQztBQUdXLFFBQUEsYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQ2hDLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FDSSxDQUFDLEVBTUgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUNsQyxlQUFlLENBQ2xCLENBQUM7QUFLVyxRQUFBLFVBQVUsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2xDLEdBQUcsRUFBRSxpQkFBUztJQUNkLElBQUksRUFBRSxtQkFBVztJQUNqQixPQUFPLEVBQUUsc0JBQWM7SUFDdkIsS0FBSyxFQUFFLG9CQUFZO0lBQ25CLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTTtJQUNsQixJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU07SUFDZCxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU87Q0FDckIsQ0FBQyxDQUFDO0FBR1UsUUFBQSxrQkFBa0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFDLElBQUksRUFBRSxtQkFBVztJQUNqQixPQUFPLEVBQUUsc0JBQWM7SUFDdkIsUUFBUSxFQUFFLHFCQUFhO0lBQ3ZCLEtBQUssRUFBRSxvQkFBWTtDQUN0QixDQUFDLENBQUM7QUFFVSxRQUFBLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekMsS0FBSyxFQUFFLG9CQUFZO0lBQ25CLFFBQVEsRUFBRSxxQkFBYTtDQUMxQixDQUFDLENBQUMifQ==