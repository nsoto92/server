const express = require('express')
const userRouter = express.Router()
const { v4: uuidv4 } = require('uuid'); //NPM package that generates ids

// Fake Data
const users = [
    { name: "Norbert", age: 28, gender: "male", _id: uuidv4() },
    { name: "Caroline", age: 29, gender: "female", _id: uuidv4() },
    { name: "Dante", age: 0.5, gender: "male", _id: uuidv4() },
]

// Routes

// Get All
userRouter.get("/", (req, res) => {
    const genderQuery = req.query.gender
    const filteredQuery = users.filter(i => i.gender === genderQuery)
    res.send(!genderQuery ? users : filteredQuery)
})

// Get by gender
// userRouter.get("/search/gender", (req, res) => {
//     const query = req.query.gender
//     const filteredQuery = users.filter(i => i.gender === query)
//     res.send(filteredQuery)
// })

// Get One
userRouter.get("/:userId", (req, res) => {
    const userId = req.params.userId
    const foundUser = users.find(user => user._id === userId)
    res.send(foundUser)
})

// Post
userRouter.post("/", (req, res) => {
    req.body._id = uuidv4()
    users.push(req.body)
    res.send(`${req.body.name} was added`)
})

// Delete One
userRouter.delete("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    users.splice(userIndex, 1)
    res.send("User Deleted")
})

// Update One
userRouter.put("/:userId", (req, res) => {
    const userId = req.params.userId
    const userIndex = users.findIndex(user => user._id === userId)
    const updatedUser = Object.assign(users[userIndex], req.body)
    res.send(updatedUser)
})

module.exports = userRouter