const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const path=require('path')
app.use('/', express.static(path.join(__dirname, 'static')))
const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

