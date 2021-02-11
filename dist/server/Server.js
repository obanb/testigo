"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.internalMongoClient = exports.externalMongoClient = void 0;
const bodyParser = require("body-parser");
const express = require("express");
const logger_1 = require("../modules/common/logger");
const mongoExternal_1 = require("../modules/mongoExternal");
const routes_1 = require("../modules/api/routes");
const mongoInternal_1 = require("../modules/mongoInternal");
const log = logger_1.logger(logger_1.factory.getLogger('server'));
let app;
exports.server = {
    run: async ({}) => {
        app = express();
        app.use(bodyParser.json({ limit: '1mb' }));
        app.use(bodyParser.json(), (err, req, res, next) => {
            if (err) {
                throw new Error(err);
            }
            else {
                next();
            }
        });
        app.use('*', (req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        });
        app.get('/healthz', (_, res) => {
            res.sendStatus(200);
        });
        app.options('*', (req, res) => {
            res.send('');
        });
        app.use('/api', routes_1.router);
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, async () => {
            log.info(`server ready on port ${PORT}`)();
            const internalMongoUri = mongoInternal_1.isoInternalMongoUri.wrap(process.env.INTERNAL_DATABASE_URI);
            const internalMongoOptions = mongoInternal_1.isoInternalMongoClientOptions.wrap({ useUnifiedTopology: true });
            const externalMongoUri = mongoExternal_1.isoExternalMongoUri.wrap('mongodb://localhost:27017/localhost');
            const externalMongoOptions = mongoExternal_1.isoExternalMongoClientOptions.wrap({ useUnifiedTopology: true });
            exports.internalMongoClient = await mongoInternal_1.getConnectedInternalClient(internalMongoUri, internalMongoOptions)();
            exports.externalMongoClient = await mongoExternal_1.getConnectedExternalClient(externalMongoUri, externalMongoOptions)();
        });
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci9TZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMENBQTBDO0FBQzFDLG1DQUFtQztBQUNuQyxxREFBeUQ7QUFHekQsNERBQTZJO0FBQzdJLGtEQUE2QztBQUM3Qyw0REFBNkk7QUFFN0ksTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLGdCQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFNaEQsSUFBSSxHQUFvQixDQUFDO0FBS1osUUFBQSxNQUFNLEdBQUc7SUFDbEIsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFpQixFQUFFLEVBQUU7UUFDN0IsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBRWhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFRLEVBQUUsR0FBUSxFQUFFLEdBQVEsRUFBRSxJQUFTLEVBQUUsRUFBRTtZQUNuRSxJQUFJLEdBQUcsRUFBRTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILElBQUksRUFBRSxDQUFDO2FBQ1Y7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUM1QixHQUFHLENBQUMsTUFBTSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsZ0RBQWdELENBQUMsQ0FBQztZQUM3RixJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDM0IsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxlQUFNLENBQUMsQ0FBQztRQUV4QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFDdEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBRTNDLE1BQU0sZ0JBQWdCLEdBQUcsbUNBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNyRixNQUFNLG9CQUFvQixHQUFHLDZDQUE2QixDQUFDLElBQUksQ0FBQyxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFFNUYsTUFBTSxnQkFBZ0IsR0FBRyxtQ0FBbUIsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztZQUN6RixNQUFNLG9CQUFvQixHQUFHLDZDQUE2QixDQUFDLElBQUksQ0FBQyxFQUFDLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFFNUYsMkJBQW1CLEdBQUcsTUFBTSwwQ0FBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7WUFDakcsMkJBQW1CLEdBQUcsTUFBTSwwQ0FBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDckcsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQyJ9