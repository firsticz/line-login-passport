const { Router } = require('express')
const router = new Router()
const auth = require('./auth')

router.use('/auth', auth)

module.exports = router