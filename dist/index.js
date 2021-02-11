"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
const pipeable_1 = require("../node_modules/fp-ts/lib/pipeable");
const logger_1 = require("./modules/common/logger");
// import {factory, hoffLogger} from './common/logger';
// tslint:disable-next-line
require('dotenv').config();
const { NODE_ENV } = process.env;
const DEV_MODE = NODE_ENV === 'DEVELOPMENT';
const log = logger_1.logger(logger_1.factory.getLogger('index'));
// ----------------------------------------------------------------------------------------------------
//  Init main scope
// ----------------------------------------------------------------------------------------------------
const main = () => pipeable_1.pipe(log.info('================================================================')(), log.info('=                    TESTIGO                  ='), log.info('================================================================'), log.info(`>>> Spouštím v ${NODE_ENV} módu`), log.info(``), startServer);
const startServer = async () => {
    const cfg = {
        devMode: DEV_MODE,
    };
    Server_1.server.run(cfg);
};
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0Q0FBc0Q7QUFDdEQsaUVBQXdEO0FBQ3hELG9EQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsMkJBQTJCO0FBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUMvQixNQUFNLFFBQVEsR0FBWSxRQUFRLEtBQUssYUFBYSxDQUFDO0FBRXJELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxnQkFBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRS9DLHVHQUF1RztBQUN2RyxtQkFBbUI7QUFDbkIsdUdBQXVHO0FBQ3ZHLE1BQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUNkLGVBQUksQ0FDQSxHQUFHLENBQUMsSUFBSSxDQUFDLGtFQUFrRSxDQUFDLEVBQUUsRUFDOUUsR0FBRyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxFQUMzRCxHQUFHLENBQUMsSUFBSSxDQUFDLGtFQUFrRSxDQUFDLEVBQzVFLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLFFBQVEsT0FBTyxDQUFDLEVBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ1osV0FBVyxDQUNkLENBQUM7QUFFTixNQUFNLFdBQVcsR0FBRyxLQUFLLElBQUksRUFBRTtJQUMzQixNQUFNLEdBQUcsR0FBa0I7UUFDdkIsT0FBTyxFQUFFLFFBQVE7S0FDcEIsQ0FBQztJQUNGLGVBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEIsQ0FBQyxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUMifQ==