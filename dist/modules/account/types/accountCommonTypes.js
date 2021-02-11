"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const t = require("io-ts");
exports.authenticationEmail = t.brand(t.string, (n) => n.length > 5, 'authenticationEmail');
exports.authenticationPassword = t.brand(t.string, (n) => n.length > 5, 'authenticationPassword');
exports.salt = t.brand(t.string, (n) => n.length > 5, 'salt');
exports.registerAccountRequest = t.interface({
    email: exports.authenticationEmail,
    password: exports.authenticationPassword,
    passwordRetry: exports.authenticationPassword,
});
exports.loginRequest = t.interface({
    email: exports.authenticationEmail,
    password: exports.authenticationPassword,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudENvbW1vblR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYWNjb3VudC90eXBlcy9hY2NvdW50Q29tbW9uVHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQkFBMkI7QUFxQmQsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQW9ELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBR3RJLFFBQUEsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUF1RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztBQUcvSSxRQUFBLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQXFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUd6RixRQUFBLHNCQUFzQixHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUMsS0FBSyxFQUFFLDJCQUFtQjtJQUMxQixRQUFRLEVBQUUsOEJBQXNCO0lBQ2hDLGFBQWEsRUFBRSw4QkFBc0I7Q0FDeEMsQ0FBQyxDQUFDO0FBSVUsUUFBQSxZQUFZLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNwQyxLQUFLLEVBQUUsMkJBQW1CO0lBQzFCLFFBQVEsRUFBRSw4QkFBc0I7Q0FDbkMsQ0FBQyxDQUFDIn0=