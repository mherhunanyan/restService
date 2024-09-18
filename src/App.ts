import { BookRoutes } from './routes/BookRoutes';
import { dbInit } from './database/Config';
import bodyParser from 'body-parser';
import { PORT } from './Config';
import express from 'express';
import LoggerFactory from './logger/Logger.factory';

const logger = LoggerFactory.getLogger('App');
const App = express();

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
