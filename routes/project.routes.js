const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/verifyToken.middleware')

const {
    getAllProjects,
    getOneProject,
    getLatestProjects,
    saveProject,
    editProject,
    deleteProject
} = require('./../controllers/project.controllers')


router.get('/getAllProjects', getAllProjects)
router.get('/getOneProject/:id', getOneProject)
router.get('/getLatestProjects', getLatestProjects)
router.post('/saveProject', isAuthenticated, saveProject)
router.put('/edit/:id', isAuthenticated, editProject)
router.delete('/delete/:id', isAuthenticated, deleteProject)


module.exports = router
