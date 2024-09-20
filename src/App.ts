import LoggerFactory from './logger/Logger.factory';
import { BookRoutes } from './routes/BookRoutes';
import { dbInit } from './databases/Config';
import bodyParser from 'body-parser';
import { PORT } from './Config';
import express from 'express';

const logger = LoggerFactory.getLogger('App');
export const App = express();

App.use(bodyParser.json());

App.use('/book', BookRoutes);

const init = async () => {
    try {
        await dbInit();
        App.listen(PORT, () => {
            logger.info(`Server is running on port ${PORT}!`);
        });
    } catch (err) {
        logger.error(err as string);
    }
};

init();
