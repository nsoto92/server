const express = require('express')
const userRouter = express.Router()
const { v4: uuidv4 } = require('uuid'); //NPM package that generates ids

// Fake Data
const users = [
    { name: "Norbert", age: 28, gender: "male", _id: uuidv4() },
    { name: "Caroline", age: 29, gender: "female", _id: uuidv4() },
    { name: "Dante", age: 0.5, gender: "male", _id: uuidv4() },
]

const user = { name: "Norbert", age: 28, gender: "male", _id: uuidv4() }

// Intercept
userRouter.use(require('../middleware'))

// Routes

// Get Request for Interception
userRouter.get("/", (req, res) => {
    const newObj = Object.assign(req.body, user)
    res.send(newObj)
})

module.exports = userRouter