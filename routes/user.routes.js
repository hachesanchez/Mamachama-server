const router = require('express').Router()
const { isAuthenticated } = require('../middlewares/verifyToken.middleware')
const {
    getAllUsers,
    getOneUser,
    getMamachama,
    getCollaborators,
    getPartner,
    editUser,
    deleteUser
} = require('../controllers/user.controllers')


router.get('/getAllUsers', getAllUsers)
router.get('/getOneUser/:id', getOneUser)
router.get('/getMamachama', getMamachama)
router.get('/getCollaborators', getCollaborators)
router.get('/getPartner', getPartner)
router.put('/edit/:id', isAuthenticated, editUser)
router.delete('/delete/:id', isAuthenticated, deleteUser)

module.exports = router