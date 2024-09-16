import express, { Application } from 'express';
import { BookRoutes } from 'routes/BookRoutes';
import { DATABASE_URL, PORT } from 'Config';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';

export const App: Application = express();

App.use(bodyParser.json());

App.use('/book', BookRoutes);

const init = async () => {
    try {
        await connect(DATABASE_URL as string);
        App.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}!`);
        });
    } catch (err) {
        console.log(err);
    }
};

init();
