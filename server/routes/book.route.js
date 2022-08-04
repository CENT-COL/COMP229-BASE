import { Router } from 'express';
import { displayBookstore } from '../controllers/book.controller.js';

const router = Router();

router.get('/', displayBookstore);

export default router;

