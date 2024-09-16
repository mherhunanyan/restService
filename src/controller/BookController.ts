import { NextFunction, Request, Response } from 'express';
import Book from 'models/BookModel';

export const postBook = async (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const description = req.body.description;
    try {
        if (!title || !description) {
            return res.status(400).json({
                message: 'Missing required fields: Please provide both title and description.',
            });
        }
        const book = new Book({
            title,
            description,
        });
        await book.save();

        const bookId = book._id.toString();
        return res.status(201).json({ message: 'Book created successfully', bookId });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.id;
    try {
        if (!bookId) {
            return res.status(400).json({ message: 'Missing Id field.' });
        }
        if (bookId.length !== 24) {
            return res.status(404).json({
                message: 'Wrong ID.',
            });
        }
        const book = await Book.findById(bookId).exec();
        if (!book) {
            return res.status(404).json({
                message: 'No book found with the provided ID.',
            });
        }

        return res.status(200).json({
            message: 'Book found successfully.',
            bookData: {
                title: book.title,
                description: book.description,
            },
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
