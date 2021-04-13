const express = require("express")
const mid = express()

mid.use('/', (req, res, next) => {
    console.log("Middleware!")
    req.body= {middle: "ware"}
    next()
})

module.exports = mid