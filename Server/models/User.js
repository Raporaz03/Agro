const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    phone:{
        type: String,
        max:10,
        min:10,
        unique:true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;