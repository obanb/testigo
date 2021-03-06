"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.database = {
    start: () => {
        return new Promise((resolve, reject) => {
            const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_NAME, DATABASE_ENDPOINT } = process.env;
            if (!DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_PORT || !DATABASE_NAME || !DATABASE_ENDPOINT) {
                throw new Error('Enviroment value for database connection is not set. "DATABASE_USER", "DATABASE_PASSWORD", "DATABASE_HOST", "DATABASE_PORT", "DATABASE_NAME","DATABASE_ENDPOINT"');
            }
            mongoose.connect(`mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_ENDPOINT}:${DATABASE_PORT}/${DATABASE_NAME}`, {});
            const conn = mongoose.connection;
            conn.once('open', () => {
                resolve(conn);
            });
            conn.on('error', (err) => {
                reject(err);
            });
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBR3hCLFFBQUEsUUFBUSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxHQUF3QixFQUFFO1FBQzdCLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsTUFBTSxFQUFDLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN4RyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsaUJBQWlCLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDaEcsTUFBTSxJQUFJLEtBQUssQ0FDWCxrS0FBa0ssQ0FDckssQ0FBQzthQUNMO1lBQ0QsUUFBUSxDQUFDLE9BQU8sQ0FDWixhQUFhLGFBQWEsSUFBSSxpQkFBaUIsSUFBSSxpQkFBaUIsSUFBSSxhQUFhLElBQUksYUFBYSxFQUFFLEVBQ3hHLEVBQUMsZUFBZSxFQUFFLElBQUksRUFBQyxDQUMxQixDQUFDO1lBQ0YsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUU7Z0JBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUMifQ==