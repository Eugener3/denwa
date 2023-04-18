const express = require('express')
const router = express.Router()
const categoryControllers = require('../Controllers/categoryControllers')

router.get('/', categoryControllers.getAll)
router.post('/', categoryControllers.create)

module.exports = router