import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    password: String,
    desc: String,
    bio: String,
    thumbnail: String,
    posts: {
        type: [],
        default: []
    },
    following: {
        type: [],
        default: []
    },
    followers: {
        type: [],
        default: []
    }
});

const userModel = mongoose.model('User', userSchema);

export default userModel;