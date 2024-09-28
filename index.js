const express=require("express");
const app=express();
const mongoose=require("mongoose");
const stuRoute=require("./routes/studentRoute");
const bodyparser=require("body-parser");
const bodyParser = require("body-parser");



mongoose.connect("mongodb://127.0.0.1:27017/megha").then(()=>{
    console.log("db successfully connected!!");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/students",stuRoute);

app.listen(8000,()=>{
    console.log("server run on 8000!!")
})