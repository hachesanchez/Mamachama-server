const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/user', require('./user.routes'))
router.use('/project', require('./project.routes'))
router.use('/upload', require('./upload.routes'))
router.use('/test', require('./test.routes'))



module.exports = router