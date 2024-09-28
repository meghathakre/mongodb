const StuModel=require("../models/studentModel");
const stuInformation=(req,res)=>{
    res.send("this is student information");

}

const stuDataSave=(req,res)=>{
    //req.body={rollno:121,name:'sachin',city:'bhopal'}
    const {rollno,name,city}=req.body;
    const student=new StuModel({

rollno:rollno,
name:name,
city:city

    })

student.save();
res.send("data successfully save!!!")
}
module.exports={
    stuInformation,
    stuDataSave
}