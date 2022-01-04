import QuestionPaper from "./model.js"
import asyncHandler from "express-async-handler"

export const getPaper = asyncHandler( async(req,res)=>{
    const queryData = req.query
    var easyQuestion=[]
    var mediumQuestion=[]
    var hardQuestion=[]

    var result = {}
    var easyQuestionCount = (queryData.totalMarks*queryData.easy)/2
    var mediumQuestionCount = (queryData.totalMarks*queryData.medium)/5
    var hardQuestionCount = (queryData.totalMarks*queryData.hard)/10
    if(hardQuestionCount<1){

        hardQuestionCount= 0
    }
    if(mediumQuestionCount<1){
        mediumQuestionCount= 0
    }
    if(easyQuestionCount<1){
        easyQuestionCount= 0
    }

    if(easyQuestionCount!==0){
     easyQuestion = await QuestionPaper.find({"difficulty":'Easy'}).limit(easyQuestionCount)}

    
    if(mediumQuestionCount!==0){
     mediumQuestion = await QuestionPaper.find({"difficulty":'Medium'}).limit(mediumQuestionCount)}

    if(hardQuestionCount!==0){
     hardQuestion = await QuestionPaper.find({"difficulty":'Hard'}).limit(hardQuestionCount)}

    result.easy = easyQuestion
    result.medium = mediumQuestion
    result.hard = hardQuestion

    res.status(200).json(result)
})