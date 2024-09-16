import { Router } from 'express';

export const BookRouter = Router();

BookRouter.post('/');
BookRouter.get('/:id');
BookRouter.get('/');
