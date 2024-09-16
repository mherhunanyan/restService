import request from 'supertest';
import { App } from '../../App';
import mongoose from 'mongoose';

describe('POST /book', () => {
    it('should create a book and return a book ID', async () => {
        const bookData = {
            title: 'Example Title',
            description: 'Example Description',
        };

        const response = await request(App).post('/book').send(bookData);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('bookId');
        expect(response.body.message).toEqual('Book created successfully');
    });

    it('should return 400 if title or description is missing', async () => {
        const bookData = { title: 'Example Title' };

        const response = await request(App).post('/book').send(bookData);

        expect(response.status).toBe(400);
        expect(response.body.message).toEqual(
            'Missing required fields: Please provide both title and description.',
        );
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});
