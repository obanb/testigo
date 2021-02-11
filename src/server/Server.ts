import * as bodyParser from 'body-parser';
import * as express from 'express';
import {factory, logger} from '../modules/common/logger';
import * as E from 'fp-ts/Either';
import {BackendError} from '../modules/errors';
import {ExternalMongoClient, getConnectedExternalClient, isoExternalMongoClientOptions, isoExternalMongoUri} from '../modules/mongoExternal';
import {router} from '../modules/api/routes';
import {getConnectedInternalClient, InternalMongoClient, isoInternalMongoClientOptions, isoInternalMongoUri} from '../modules/mongoInternal';

const log = logger(factory.getLogger('server'));

export interface ExpressConfig {
    readonly devMode: boolean;
}

let app: express.Express;

export let externalMongoClient: E.Either<BackendError, ExternalMongoClient>;
export let internalMongoClient: E.Either<BackendError, InternalMongoClient>;

export const server = {
    run: async ({}: ExpressConfig) => {
        app = express();

        app.use(bodyParser.json({limit: '1mb'}));
        app.use(bodyParser.json(), (err: any, req: any, res: any, next: any) => {
            if (err) {
                throw new Error(err);
            } else {
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

        app.use('/api', router);

        const PORT = process.env.PORT || 8080;
        app.listen(PORT, async () => {
            log.info(`server ready on port ${PORT}`)();

            const internalMongoUri = isoInternalMongoUri.wrap(process.env.INTERNAL_DATABASE_URI);
            const internalMongoOptions = isoInternalMongoClientOptions.wrap({useUnifiedTopology: true});

            const externalMongoUri = isoExternalMongoUri.wrap('mongodb://localhost:27017/localhost');
            const externalMongoOptions = isoExternalMongoClientOptions.wrap({useUnifiedTopology: true});

            internalMongoClient = await getConnectedInternalClient(internalMongoUri, internalMongoOptions)();
            externalMongoClient = await getConnectedExternalClient(externalMongoUri, externalMongoOptions)();
        });
    },
};
