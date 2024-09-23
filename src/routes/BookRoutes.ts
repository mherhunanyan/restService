import { deleteBook, getBook, postBook, updateBook } from '../controllers/BookController';
import { Router } from 'express';

export const BookRoutes = Router();

BookRoutes.post('/', postBook);
BookRoutes.get('/:id', getBook);
BookRoutes.delete('/:id', deleteBook);
BookRoutes.put('/:id', updateBook);
