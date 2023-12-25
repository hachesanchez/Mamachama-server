const router = require('express').Router()

router.use('/test', require('./test.routes'))


module.exports = router