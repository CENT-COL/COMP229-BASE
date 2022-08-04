import { Router } from 'express';
import connectEnsureLogin from 'connect-ensure-login';
import { displayBookstore } from '../controllers/book.controller.js';

const router = Router();

router.get('/',connectEnsureLogin.ensureLoggedIn('/auth/login'), displayBookstore);


export default router;

