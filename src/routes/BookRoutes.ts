import { Router } from 'express';

export const BookRoutes = Router();

BookRoutes.post('/');
BookRoutes.get('/:id');
BookRoutes.get('/');
