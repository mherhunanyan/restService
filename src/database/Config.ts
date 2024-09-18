import { NODE_ENV, PRODUCTION_DB_URL, TEST_DB_URL } from '../Config';
import LoggerFactory from '../logger/Logger.factory';
import { env } from '../constants/EnvConstants';
import { connect } from 'mongoose';

export const dbInit = async () => {
    const logger = LoggerFactory.getLogger('dbInit');
    if (NODE_ENV === env.DEVELOPMENT) {
        await connect(PRODUCTION_DB_URL as string);
        logger.info('developmenttttttttttttttt');
    } else if (NODE_ENV === env.TEST) {
        await connect(TEST_DB_URL as string);
        logger.info('testtttttttttttttttttt');
    }
};
