const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const cookieParser = require('cookie-parser')

const categoryRouters = require('./Routers/categoryRouters')
const userRouters = require('./Routers/userRouters')

const api = '/api/'
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

app.use(`${api}category`, categoryRouters)
app.use(`${api}user`, userRouters)

module.exports = app