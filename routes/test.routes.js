const router = require("express").Router()
const { testEndpoint } = require('./../controllers/test.controllers')

router.get("/", testEndpoint)

module.exports = router
