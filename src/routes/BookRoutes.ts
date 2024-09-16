import { getAllBooks, getBook, postBook } from 'controller/BookController';
import { Router } from 'express';

export const BookRoutes = Router();

BookRoutes.post('/', postBook);
BookRoutes.get('/:id', getBook);
BookRoutes.get('/', getAllBooks);
