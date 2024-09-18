import { NODE_ENV, PRODUCTION_DB_URL, TEST_DB_URL } from '../Config';
import { env } from '../constants/EnvConstants';
import { connect } from 'mongoose';

export const dbInit = async () => {
    if (NODE_ENV === env.DEVELOPMENT) {
        await connect(PRODUCTION_DB_URL as string);
        console.log('developmenttttttttttttttt');
    } else if (NODE_ENV === env.TEST) {
        await connect(TEST_DB_URL as string);
        console.log('testtttttttttttttttttt');
    }
};
