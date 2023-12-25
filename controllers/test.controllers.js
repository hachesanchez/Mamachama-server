const { response } = require('express')

const testEndpoint = (req, res) => {
    res.json('All good here Mamachama!')
}

module.exports = {
    testEndpoint
}