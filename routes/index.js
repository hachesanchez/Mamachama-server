const router = require('express').Router()

router.use('/auth', require('./auth.routes'))
router.use('/test', require('./test.routes'))
router.use('/project', require('./project.routes'))
router.use("/upload", require('./upload.routes'))



module.exports = router