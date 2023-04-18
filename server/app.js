const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')

const categoryRouters = require('./Routers/categoryRouters')

const api = '/api/'
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(`${api}category`, categoryRouters)


module.exports = app