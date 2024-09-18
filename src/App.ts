import express, { Application } from 'express';
import { BookRoutes } from './routes/BookRoutes';
import { dbInit } from './database/Config';
import bodyParser from 'body-parser';
import { PORT } from './Config';

export const App: Application = express();

App.use(bodyParser.json());

App.use('/book', BookRoutes);

const init = async () => {
    try {
        await dbInit();
        App.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}!`);
        });
    } catch (err) {
        console.log(err);
    }
};

init();
