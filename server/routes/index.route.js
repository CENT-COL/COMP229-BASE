import express from 'express';
// import * as connectEnsureLogin from 'connect-ensure-login';
import { displayAboutPage, displayContactPage, displayLoginPage, displayProductsPage, displayServicesPage } from '../controllers/index.controller.js';


const router = express.Router();

router.get('/', displayLoginPage);

router.get('/home', displayLoginPage);

// router.get('/secret', connectEnsureLogin.ensureLoggedIn('/auth/login'), (req, res) => {
//     return res.render('index', {title:'Home'});
// });

router.get('/about', displayAboutPage);

router.get('/products', displayProductsPage);

router.get('/services', displayServicesPage);

router.get('/contact', displayContactPage);

export default router;