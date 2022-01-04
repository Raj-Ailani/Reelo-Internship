import mongoose from 'mongoose';

const paperSchema = mongoose.Schema({
    question:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
    topic:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true,
    },
    marks:{
        type:Number,
        required:true,
    }
},{
    timestamps: true
})

const QuestionPaper = mongoose.model('QuestionPaper',paperSchema)

export default QuestionPaper
