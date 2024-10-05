
const studentModel = require("../models/studentModel");
const StuModel=require("../models/studentModel");
const homepage=(req,res)=>{
    res.send("this is my Home page")
}
const studentSave=(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const student=new StuModel({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    })
    student.save();
    res.send("data succesfully save")
}
const studentDisplay=async(req,res)=>{
    const studata=await studentModel.find();
    res.send(studata);
}
const studentSearch =async(req,res)=>{
    const {rollno}=req.body;
    const data= await studentModel.find({"rollno":rollno});
    res.send(data);
}
const stuSearchByQuery=async(req,res)=>{
    const{name,city}=req.query;
    const Data=await StuModel.find({$and:[{"name":name},{"city":city}]});
    res.send(Data);
}
const stuSaveCreate=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const MyData=StuModel.create({
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    
    })
    res.send("data save by query")
}
   
module.exports={
    homepage,
    studentSave,
    studentDisplay,
    studentSearch,
    stuSearchByQuery,
    stuSaveCreate
}