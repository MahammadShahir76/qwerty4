const mongoose =require('mongoose')
const ServiceReview=new mongoose.Schema({
    Fullname:String,
    ServiceCategory:String,
    review1:Number,
    review2:Number,
    review3:Number,
    description:String
})
module.exports=mongoose.model("serviceReview",ServiceReview);