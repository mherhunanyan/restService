import { GenericContainer, PullPolicy } from 'testcontainers';
import { NODE_ENV, PRODUCTION_DB_URL } from '../Config';
import LoggerFactory from '../logger/Logger.factory';
import { env } from '../constants/EnvConstants';
import { connect } from 'mongoose';

export const dbInit = async () => {
    const logger = LoggerFactory.getLogger('dbInit');
    try {
        if (NODE_ENV === env.DEVELOPMENT) {
            await connect(PRODUCTION_DB_URL as string);
            logger.info('The database connection was successful');
        } else if (NODE_ENV === env.TEST) {
            const container = await new GenericContainer('bitnami/mongodb')
                .withPullPolicy(PullPolicy.alwaysPull())
                .withExposedPorts(27017)
                .start();

            const port = container.getMappedPort(27017);
            await connect(`mongodb://localhost:${port}`);
        }
    } catch (err) {
        logger.error(err as string);
    }
};
