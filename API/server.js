const express = require ("express")
const app = express()
const middleware=require ("./utils/middleware")

app.use(express.json())
app.set('trust proxy', true)

//nodemon for init
//global middleware goes at the top 
//global auth goes here



app.get('/', (req, res)=>{
    console.log("BOO!")
    res.status(200).json({"status":"online"})
})

const userRouter=require('./routes/users')

const tableRouter=require('./routes/tables')


app.use(middleware.ipLogger)
app.use('/tables',tableRouter)
app.use('/users',userRouter)

app.listen(3000)