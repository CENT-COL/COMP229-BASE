import express from 'express';
import * as connectEnsureLogin from 'connect-ensure-login';


const router = express.Router();

router.get('/', (req, res) => {
    return res.render('index', {title:'Home'});
});

router.get('/secret', connectEnsureLogin.ensureLoggedIn('/auth/login'), (req, res) => {
    return res.render('index', {title:'Home'});
});

router.get('/about', (req, res) => {
    return res.render('index', {title:'About'});
});

router.get('/products', (req, res) => {
    return res.render('index', {title:'Products'});
});

router.get('/services', (req, res) => {
    return res.render('index', {title:'Services'});
});

router.get('/contact', (req, res) => {
    return res.render('index', {title:'Contact'});
});

export default router;