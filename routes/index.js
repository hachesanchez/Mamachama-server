const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/test', require('./test.routes'))


module.exports = router