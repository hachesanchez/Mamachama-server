const User = require('./../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10


const signup = (req, res, next) => {

    const { email, password, username, avatar, description, relation, occupation, socialMedia, projects } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: 'Password must have at least 2 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username, avatar, description, relation, occupation, socialMedia, projects })
        })
        .then((createdUser) => {

            const { email, username, role, avatar, description, relation, occupation, socialMedia, projects, location, _id } = createdUser
            const user = { email, username, role, avatar, description, relation, occupation, socialMedia, projects, location, _id }

            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })

}



const login = (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }


    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, avatar, description, relation, occupation, socialMedia, projects } = foundUser;

                const payload = { _id, email, username, avatar, description, relation, occupation, socialMedia, projects }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user" });
            }

        })
        .catch(err => next(err));

}


const verify = (req, res, next) => {

    console.log('User with a valid token and following data:', req.payload)
    res.status(200).json(req.payload)

}

module.exports = {
    signup,
    login,
    verify
}