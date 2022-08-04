import { Router } from 'express';
import BookModel from '../models/book.js';

const router = Router();

router.get('/', (req, res, next) => {
    BookModel.find((err, bookList) => {
        if(err)
            return console.error(err);

        res.render('book/index', {title: 'Book List', BookList: bookList});
    })
});

export default router;

