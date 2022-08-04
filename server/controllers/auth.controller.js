import UserModel from '../models/user.model.js'

export const displayLoginPage = (req, res) => {
    res.render('auth/login', { title: 'Login', messages: req.flash('error'), displayName: req.user ? req.user.displayName : '' })
};

export const logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            console.error(err);
            return next(err);
        };
        res.redirect('/')
    })
};

export const displayRegistrationPage = (req, res) => {
    return res.render('auth/register', { title: 'Registration', messages: req.flash('error'), displayName: req.user ? req.user.displayName : '' })
}

export const processRegistrationPage = (req, res, next) => {

    const {username, email, password, displayName} = req.body;
  
    UserModel.findOne({username}, (err, user) => {
      if(err) {
        console.error(err);
        return next(err);
      }
  
      if(user){
        res.render('auth/register',{ title: 'Registration', messages: req.flash('error', 'User already exists'), displayName: req.user ? req.user.displayName : ''})
      };   
  
      const newUser = new UserModel({
        username,
        email,
        password,
        displayName
      });
  
      newUser.save();
  
      req.login(newUser, (err) => {
        if(!err){
          res.redirect('/')
        } else {
          return next(err);
        }
      });
  
    });
  
  
  }