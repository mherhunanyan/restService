import LoggerFactory from '../logger/Logger.factory';
import { RequestHandler } from 'express';
import Book from '../models/BookModel';

export const postBook: RequestHandler = async (req, res, next) => {
    const logger = LoggerFactory.getLogger('postBook');
    const { title, description } = req.body;
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

        return res.status(201).json({
            message: 'Book created successfully',
            bookId: book._id.toString(),
        });
    } catch (err) {
        logger.error(err as string);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getBook: RequestHandler = async (req, res, next) => {
    const logger = LoggerFactory.getLogger('getBook');
    const { id: bookId } = req.params;
    try {
        if (!bookId || bookId.length !== 24) {
            return res.status(404).json({
                message: 'Wrong ID.',
            });
        }
        const book = await Book.findOne({ _id: bookId });
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
        logger.error(err as string);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const deleteBook: RequestHandler = async (req, res, next) => {
    const logger = LoggerFactory.getLogger('deleteBook');
    const { id: bookId } = req.params;
    try {
        if (!bookId || bookId.length !== 24) {
            return res.status(404).json({
                message: 'Wrong ID.',
            });
        }
        const book = await Book.findByIdAndDelete(bookId);
        if (book) {
            return res.status(200).json({ message: 'Book deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Book not found' });
        }
    } catch (err) {
        logger.error(err as string);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateBook: RequestHandler = async (req, res, next) => {
    const logger = LoggerFactory.getLogger('deleteBook');
    const { id: bookId } = req.params;
    const { title, description } = req.body;
    try {
        if (!bookId || bookId.length !== 24) {
            return res.status(404).json({
                message: 'Wrong ID.',
            });
        }
        if (!title && !description) {
            return res.status(400).json({
                message: 'Title or description is required.',
            });
        }
        if (!title) {
            const book = await Book.findByIdAndUpdate(bookId, { description });
            return res.status(200).json({ message: 'Book updated successfully.', book });
        } else if (!description) {
            const book = await Book.findByIdAndUpdate(bookId, { title });
            return res.status(200).json({ message: 'Book updated successfully.', book });
        } else {
            const book = await Book.findByIdAndUpdate(bookId, {
                title,
                description,
            });
            return res.status(200).json({ message: 'Book updated successfully.', book });
        }
    } catch (err) {
        logger.error(err as string);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
