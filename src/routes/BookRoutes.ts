import { deleteBook, getBook, postBook } from '../controllers/BookController';
import { Router } from 'express';

export const BookRoutes = Router();

BookRoutes.post('/', postBook);
BookRoutes.get('/:id', getBook);
BookRoutes.delete('/:id', deleteBook);
