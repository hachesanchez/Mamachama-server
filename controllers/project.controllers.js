const Project = require('./../models/Project.model')
const Media = require('../models/Media.model')
const User = require('../models/User.model')


const getAllProjects = (req, res, next) => {

    Project
        .find()
        .populate({
            path: 'author',
            select: 'username'
        })
        // .populate({
        //     path: 'media',
        //     select: 'url'
        // })
        .sort({ createdAt: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const getOneProject = (req, res, next) => {

    const { id } = req.params

    Project
        .findById(id)
        .populate({
            path: 'author',
            select: 'username'

        })
        // .populate({
        //     path: 'media'
        // })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const getLatestProjects = (req, res, next) => {

    Project
    .find()
    .populate({
        path:'author',
        select: 'username'
    })
    .sort({createdAt: -1})
    .limit(4)
    .then(response => res.json(response))
    .catch(err=> next(err))
}


const saveProject = (req, res, next) => {

    const { title, description, featuredImage, content, tags, media, createdAt } = req.body
    const { _id: author } = req.payload

    Project
        .create({ author, title, description, featuredImage, content, tags, media, createdAt })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const editProject = (req, res, next) => {

    const { title, description, featuredImage, content, tags, media, createdAt } = req.body
    const { id } = req.params
    const { _id: author } = req.payload

    Project
        .findByIdAndUpdate(id, { author, title, description, featuredImage, content, tags, media, createdAt }, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))

}


const deleteProject = (req, res, next) => {

    const { id } = req.params
    Project
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => next(err))
}





module.exports = {
    getAllProjects,
    getOneProject,
    getLatestProjects,
    saveProject,
    editProject,
    deleteProject
}