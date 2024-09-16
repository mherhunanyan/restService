import { postBook } from 'controller/BookController';
import { Router } from 'express';

export const BookRoutes = Router();

BookRoutes.post('/', postBook);
BookRoutes.get('/:id');
BookRoutes.get('/');
