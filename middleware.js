const express = require("express")
const mid = express()

mid.use('/users', (req, res, next) => {
    console.log("Middleware!")
    req.body.middle     = "ware"
    next()
})

module.exports = mid