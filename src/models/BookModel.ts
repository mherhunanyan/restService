import { Schema, model } from 'mongoose';

interface IBook {
    title: string;
    description: string;
}

const BookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Book = model<IBook>('Book', BookSchema);

export default Book;
