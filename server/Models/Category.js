const mongoose = require('mongoose')
const {model} = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    nameCategory: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('categories', categorySchema)