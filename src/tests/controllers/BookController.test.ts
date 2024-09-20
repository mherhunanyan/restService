import Book from '../../models/BookModel';
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
    }, 10000);

    it('should return 400 if title or description is missing', async () => {
        const bookData = { title: 'Example Title' };

        const response = await request(App).post('/book').send(bookData);

        expect(response.status).toBe(400);
        expect(response.body.message).toEqual(
            'Missing required fields: Please provide both title and description.',
        );
    });
});

describe('GET /book/:id', () => {
    it('should return 404 if the ID format is wrong', async () => {
        const mockBookId = 'aghagsg';
        const response = await request(App).get(`/book/${mockBookId}`);
        expect(mockBookId.length).not.toEqual(24);
        expect(response.status).toBe(404);
        expect(response.body.message).toEqual('Wrong ID.');
    });

    it('should return 404 if no book found with the provided ID', async () => {
        const fakeId = '507f1f77bcf86cd799439011';
        const response = await request(App).get(`/book/${fakeId}`);
        expect(response.status).toBe(404);
        expect(response.body.message).toEqual('No book found with the provided ID.');
    });

    it('should return 200 and the book data if a book is found', async () => {
        const newBook = new Book({
            title: 'Test Book',
            description: 'Test Description',
        });
        await newBook.save();

        const response = await request(App).get(`/book/${newBook._id}`);
        expect(response.status).toBe(200);
        expect(response.body.bookData.title).toEqual('Test Book');
        expect(response.body.bookData.description).toEqual('Test Description');

        await Book.deleteOne({ _id: newBook._id });
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});
