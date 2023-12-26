const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    mediaTitle: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
})

const Media = mongoose.model('Media', mediaSchema)
module.exports = Media
