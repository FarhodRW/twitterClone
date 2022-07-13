import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'
const app = express()

mongoose.connect(String(process.env.MONGODB_URI))
  .then(() => console.log('Connected to database 😎'))
  .catch(() => console.log("Can't connect to the database🙄"))

mongoose.set('debug', true)

//middlewares
app.use(cors())



const port = process.env.PORT

app.listen(port, ()=>{
   console.log( `Server is listening on port ${port} ✊` )
})

