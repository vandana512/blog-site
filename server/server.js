import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'

const app = express()

await connectDB()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.send("Api is working")
})

const PORT= 3000;

app.listen(PORT, ()=>{
    console.log("Server is running on port 3000")
})

export default app