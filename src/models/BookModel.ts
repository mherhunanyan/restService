import { Schema, model } from 'mongoose';

interface IBook {
    title: string;
    description: string;
}

const BookSchema = new Schema<IBook>({
    title: { type: String, require },
    description: { type: String, require },
});

const Book = model<IBook>('Book', BookSchema);

export default Book;
