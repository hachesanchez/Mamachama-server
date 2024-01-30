const User = require('../models/User.model')
const Project = require('../models/Project.model')
const { response } = require('express')

const getAllUsers = (req, res, next) => {

    User
        .find()
        .select({ username: 1, avatar: 1, description: 1, relation: 1, projects: 1 })
        .sort({ relation: 1, username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getOneUser = (req, res, next) => {

    const { id } = req.params

    User
        .findById(id)
        .populate({
            path: 'projects',
            select: 'title'
        })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getMamachama = (req, res, next) => {

    User
        .find({ relation: 'Team Mamachama' })
        .populate({
            path: 'projects',
            select: 'title'
        })
        .select({ username: 1, avatar: 1, description: 1, relation: 1, projects: 1 })
        .sort({ username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getCollaborators = (req, res, next) => {

    User
        .find({ relation: 'Collaborator' })
        .populate({
            path: 'projects',
            select: 'title'
        })
        .select({ username: 1, avatar: 1, description: 1, relation: 1, projects: 1 })
        .sort({ username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getPartner = (req, res, next) => {

    User
        .find({ relation: 'Partner' })
        .populate({
            path: 'projects',
            select: 'title'
        })
        .select({ username: 1, avatar: 1, description: 1, relation: 1, projects: 1 })
        .sort({ username: 1 })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const getUserProjects = (req, res, next) => {

    const { id } = req.params;

    User
        .findById(id)
        .populate({
            path: 'projects',
            select: 'title featuredImage description tags createdAt'
        })
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.json(user.projects);
        })
        .catch(err => next(err));
};


const editUser = (req, res, next) => {

    const { email, username, avatar, description, relation } = req.body
    const { id } = req.params

    const updateUser = { email, username, avatar, description, relation }

    User
        .findByIdAndUpdate(id, updateUser, { new: true })
        .then(response => res.json(response))
        .catch(err => next(err))
}


const deleteUser = (req, res, next) => {

    const { id } = req.params

    User
        .findByIdAndDelete(id)
        .then(() => res.sendStatus(204))
        .catch(err => next(err))
}



module.exports = {
    getAllUsers,
    getOneUser,
    getMamachama,
    getCollaborators,
    getPartner,
    getUserProjects,
    editUser,
    deleteUser
}
