import { BookRouter } from 'router/BookRouter';
import bodyParser from 'body-parser';
import express from 'express';
import { PORT } from 'Config';

const app = express();

app.use(bodyParser.json());
app.use('/book', BookRouter);

app.listen(PORT);
