import mongoose from 'mongoose'
import dotenv from 'dotenv'
import QuestionPaper from './model.js'
import data from './data.js'
import connectDB from './config/connectDB.js'

dotenv.config()
connectDB()


const importData = async() =>{
    try {
        await QuestionPaper.deleteMany()


      const created= await QuestionPaper.insertMany(data)
  
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}


const destroyData = async() =>{
    try {
        await QuestionPaper.deleteMany()

        console.log('Data Destroyed')
        process.exit()

    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}else{
    importData()
}