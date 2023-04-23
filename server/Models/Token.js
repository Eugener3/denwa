const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    refreshToken: {
        type: String,
        required: true
    }
})

module.exports = model('tokens', tokenSchema)