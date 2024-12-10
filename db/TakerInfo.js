const mongoose =require('mongoose')
const TakerInfo=new mongoose.Schema({
    FullName:String,
    Email:String,
    Address:String,
    ServiceCategory:String,
    Budget:Number,
    Description:String,
    ProblemDStartedOn:String,
    Emergency:String,
    problemImg:String
})
module.exports=mongoose.model("TakerInfoee",TakerInfo);