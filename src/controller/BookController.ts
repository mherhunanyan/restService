import { NextFunction, Request, Response } from 'express';
import Book from 'models/BookModel';

export const postBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        if (!title || !description) {
            res.status(400).json({ message: 'Missing required fields.' });
        }
        const book = new Book({
            title,
            description,
        });
        await book.save();

        const bookId = book._id.toString();
        res.status(201).json({ message: 'Book created successfully', bookId });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
