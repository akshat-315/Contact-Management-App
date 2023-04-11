const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true, "Please add the username"],
        unique : [true],
    },
    email : {
        type : String,
        required : [true, "Please add your email address"],
        unique : [true],
    },
    password : {
        type : String,
        required : [true, "Please add the password"],
    },
} , {
    timestamps : true,
});

module.exports = mongoose.model("User", userSchema);