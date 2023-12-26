const router = require('express').Router()

const {
    signup,
    login,
    verify
} = require('./../controllers/auth.controllers')

router.post('/signup', signup)
router.post('/login', login)
router.get('/verify', verify)

module.exports = router