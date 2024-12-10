const mongoose = require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    Category:String
})
module.exports=mongoose.model("Users",userSchema);