import express, { Application } from 'express';
import { BookRoutes } from 'routes/BookRoutes';
import { DATABASE_URL, PORT } from 'Config';
import bodyParser from 'body-parser';
import { connect } from 'mongoose';

const app: Application = express();

app.use(bodyParser.json());

app.use('/book', BookRoutes);

const init = async () => {
    try {
        await connect(DATABASE_URL as string);
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}!`);
        });
    } catch (err) {
        console.log(err);
    }
};

init();
