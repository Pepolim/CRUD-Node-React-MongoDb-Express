const mongoose = require("../configuration/dbConfig");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
    
    /*
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    */
});

const User = mongoose.model('User', userSchema);

module.exports = User;