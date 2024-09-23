import { deleteBook, getBook, postBook, updateBook } from '../controllers/BookController';
import { Router } from 'express';

export const BookRoutes = Router();

BookRoutes.post('/', postBook);
BookRoutes.get('/:id', getBook);
BookRoutes.put('/:id', updateBook);
BookRoutes.delete('/:id', deleteBook);
