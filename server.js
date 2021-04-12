const express = require("express")
const app = express()

// Middleware 
app.use(express.json()) //Turn request body into req.body

// Intercept
app.use(require('./middleware'))

//Routes
app.use('/users', require('./routes/userRouter'))

// Server Listen -> 2 Arguments: Port, Callback func
app.listen(9000, () => {
    console.log('server is 9000')
})