import mongoose from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';

const UserSchema = mongoose.Schema({
    username: {
        type:String,
        trim: true,
        required: 'username is required'
    },
    email: {
        type:String,
        trim: true,
        required: 'email is required'
    },
    displayName: {
        type:String,
        trim: true,
        required: 'display name is required'
    },
    password: {
        type: String,
        required: true,
        trim: true        
    }
}, {
    timestamps: true,
    collection: 'users'
});

UserSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = this._hashPassword(this.password);
    } 

    return next();
});

UserSchema.methods = {
    _hashPassword(password){
        return hashSync(password);
    },
    verifyPassword(password){
        return compareSync(password, this.password);
    },
    createToken(){
        return jwt.sign({
            _id: this._id
        }, process.env.JWT_SECRET)
    },
    toJSON(){
        return {
            _id: this._id,
            username: this.username,
            token: `JWT ${this.createToken()}`
        }
    }
}


const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;