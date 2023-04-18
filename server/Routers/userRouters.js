const express = require('express')
const router = express()
const userControllers = require('../Controllers/userControllers')

router.get('/', userControllers.getAll)
router.post('/register', userControllers.register)

module.exports = router