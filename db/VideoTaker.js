const mongoose =require('mongoose')
const VideoTaker=new mongoose.Schema({
    FullName:String,
    Email:String,
    Address:String,
    ServiceCategory:String,
    Budget:Number,
    Description:String,
    ProblemDStartedOn:String
})
module.exports=mongoose.model("VideoTakeree",VideoTaker);