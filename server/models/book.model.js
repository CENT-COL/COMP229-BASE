import mongoose from 'mongoose';

const BookSchema = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
}, {
    collection: "books"
});

const BookModel = mongoose.model('BookModel', BookSchema);
export default BookModel;