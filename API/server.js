const express = require ("express")
const app = express()
const connection = require("../DB/db")
const mysql=require ("mysql")
app.use(express.json())
//nodemon for init
//global middleware goes at the top 
//global auth goes here
//log
//convert/parse-out/render data
//rate limiting
app.get('/', (req, res)=>{
    console.log("BOO!")
    res.status(200).json({"status":"online"})
})



// app.post
// app.patch
// app.delete
 
const userRouter=require('./routes/users')

const tableRouter=require('./routes/tables')
app.use('/tables',tableRouter)
app.use('/users',userRouter)
app.listen(3000)