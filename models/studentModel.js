const mongoose=require("mongoose");
const StuSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    city:String
})
module.exports=mongoose.model("student",StuSchema);