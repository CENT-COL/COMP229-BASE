import 'dotenv/config';
import * as createError from 'http-error';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));

import indexRouter from '../server/routes/index.js';
import bookRouter from '../server/routes/book.js';

app.use('/', indexRouter);
app.use('/booklist', bookRouter);

// error handling
app.use((req, res, next) => {    
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500);
    res.render('error', {title: 'Error'});
})


mongoose.connect(process.env.DB_URL, {useNewUrlParser:true, useUnifiedTopology: true, dbName:process.env.DB_NAME})
    .then(() => {
        console.log(`Connected to MongoDB...`)
        app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));

    })
    .catch((error) => console.error(error));



