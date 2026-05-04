import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'

import adminRouter from './routes/adminRoutes.js'
import blogRouter from './routes/blogRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send("API is working")
})

app.use('/api/admin', adminRouter)
app.use('/api/blog', blogRouter)

const startServer = async () => {
  try {
    await connectDB()
    console.log("DB Connected")

    const PORT = process.env.PORT || 5000

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })

  } catch (error) {
    console.error("❌ Server start failed:", error)
    process.exit(1)
  }
}

startServer()