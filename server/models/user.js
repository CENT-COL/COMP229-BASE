import mongoose from 'mongoose';
import passportMongoose from  'passport-local-mongoose'

const UserSchema = mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportMongoose);

const UserModel = mongoose.model('UserModel', UserSchema);
export default UserModel;