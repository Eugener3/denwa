const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    activationLink: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phone: {
        type: String
    },
    speciality: {
        type: String
    },
    bio: {
        type: String
    },
    rating: {
        type: Number
    },
    avatarUrl: {
        type: String
    }
})

module.exports = model('users', userSchema)