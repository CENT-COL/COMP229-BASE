import BookModel from '../models/book.model.js'

export const displayBookstore =(req, res, next) => {
    BookModel.find((err, bookList) => {
        if(err)
            return console.error(err);

        res.render('book/index', {title: 'Book List', BookList: bookList});
    })
};