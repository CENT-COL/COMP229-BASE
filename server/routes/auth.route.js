import { Router } from "express";
import { displayLoginPage, displayRegistrationPage, logout, processRegistrationPage } from "../controllers/auth.controller.js";
import UserModel from "../models/user.model.js";
import { authLocal } from "../services/auth.services.js";

const router = Router();


router.get('/login', displayLoginPage);

router.get('/logout', logout);

router.post('/login', authLocal, (req, res) => {
  return res.redirect('/');
});

router.get('/register', displayRegistrationPage)

router.post('/register', processRegistrationPage);

export default router;