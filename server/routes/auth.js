import { Router } from "express";
import passport from "passport";

const router = Router();

router.get('/login', (req, res) => {
    res.render('auth/login', { title: 'Login'})
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

router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login',
      successRedirect: '/secret',
    }),
    (req, res) => {
      console.log(req.user);
    }
  );

export default router;