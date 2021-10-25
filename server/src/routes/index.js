const express = require('express')
const router = express.Router()
const book = require('./bookcontrol')

router.use('/books', book)

module.exports = router