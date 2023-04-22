const express = require('express')
const router = express()
const userControllers = require('../Controllers/userControllers')

router.get('/', userControllers.getAll)
router.post('/register', userControllers.register)
router.post('/login', userControllers.login)

module.exports = router