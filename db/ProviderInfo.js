const mongoose =require('mongoose')
const ProviderInfo=new mongoose.Schema({
    FullName:String,
    PhoneNumber:Number,
    Address:String,
    ServiceCategory:String,
    Specialisation:String,
    Experience:Number,
    ToolsOwned:String,
    Availability:String
})
module.exports=mongoose.model("ProviderInfoee",ProviderInfo);