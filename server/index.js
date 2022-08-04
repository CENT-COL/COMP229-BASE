import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import passport from 'passport';
import session from 'express-session';
import flash from 'connect-flash';
import { HttpError } from 'http-error';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __filename and __dirname fix for ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Start the Express App
const app = express();

// Setup EJS View Engine
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

// Setup Middlewares
app.use(cors());
app.use(flash());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));

// Set Up Session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

// Set Up Passport
app.use(passport.initialize());
app.use(passport.session());

// Setup Routes

import indexRouter from './routes/index.route.js';
import authRouter from './routes/auth.route.js';
import bookRouter from './routes/book.route.js';

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/bookstore', bookRouter);

// error handling
app.use((req, res, next) => {    
    next(HttpError(404));
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



