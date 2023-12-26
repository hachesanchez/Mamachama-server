const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'You must specify a title']
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    description: {
        type: String,
        required: [true, 'You must specify a description']
    },
    featuredImage: {
        type: String,
        required: [true, 'You must upload a featured image']
    },
    content: {
        type: String,
        required: [true, 'You must specify some content']
    },
    media: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Media',
        },
    ],
    tags: [
        {
            type: String,
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Project = mongoose.model('Project', projectSchema)
module.exports = Project