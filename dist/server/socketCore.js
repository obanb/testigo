"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
Server_1.io.on('connection', (socket) => {
    console.log('some connected to main pool');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0Q29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvc29ja2V0Q29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUE0QjtBQUU1QixXQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsQ0FBQyJ9