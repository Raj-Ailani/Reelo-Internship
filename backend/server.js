import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import paperRoutes from './routes.js'

dotenv.config()
connectDB()
const app= express()

app.use(express.json())
app.use('/api/paper',paperRoutes)

app.get('/', (req,res)=>{
        res.send('API is running')
    })

const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode port ${PORT}`))
        
