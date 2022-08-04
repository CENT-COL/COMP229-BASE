import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import UserModel from '../models/user.model.js';


// Setup Passport Serialization for Sessions
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser( async (user, done) => {
    const _user = await UserModel.findById(user._id);
    done(null, _user);
})

// Setup Passport Local Strategy 
const localOpts = {
    usernameField: 'username',
    passwordField: 'password'
};


const localSrategy  = new LocalStrategy(localOpts, (username, password, done) => {
    UserModel.findOne({username}, (err, user) => {
        if(err) {return done(err)};
        if(!user) {return done(null, false);}
        if(!user.verifyPassword(password)) {return done(null, false)};
        return done(null, user);
    });
});

passport.use(localSrategy);

export const authLocal = passport.authenticate('local', {
    session:true,
    failureFlash:true,
    successRedirect: '/',    
});

// Setup Passport JWT Strategy 
const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('authorization'),
    secretOrKey: process.env.JWT_SECRET
};

const jwtStrategy = new JWTStrategy(jwtOpts, (jwt_payload, done) => {
    UserModel.findById(jwt_payload._id, (err, user) => {
        if(err) {return done(err)};
        if(!user) {return done(null, false);}        
        return done(null, user);
    });
});

passport.use(jwtStrategy);

export const authJWT = passport.authenticate('jwt', {
    session: false
});


