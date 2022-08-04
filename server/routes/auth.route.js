import { Router } from "express";
import { authLocal } from "../services/auth.services.js";

const router = Router();


router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login', messages: req.flash('error'), displayName: req.user ? req.user.displayName : ''})
});

router.get('/logout', (req, res) => {
    req.logout((err) => {
        if(err) {
            console.error(err);
            return next(err);
        };
        res.redirect('/')
    })
  });

router.post('/login', authLocal, (req, res) => {
  return res.redirect('/');
});

export default router;