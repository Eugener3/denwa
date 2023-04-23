const express = require('express')
const router = express()
const userControllers = require('../Controllers/userControllers')
const { authenticate } = require('passport')

router.post('/register', userControllers.register)
router.post('/login', userControllers.login)
router.post('/logout', userControllers.logout)
router.get('/', userControllers.getAll)
router.get('/activate/:link', userControllers.activate)
router.get('/refresh', userControllers.refresh)

module.exports = router