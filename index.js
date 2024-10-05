const express=require("express");
const app=express();
const mongoose=require("mongoose");
const stuRoute=require("./routes/studentRoute");
const bodyparser=require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/kumkum").then(()=>{
    console.log("Db successfully Save!!")
})
app.use(bodyparser.urlencoded({extend:false}))
app.use(bodyparser.json());
app.use("/students",stuRoute);

app.listen(8000,()=>{
    console.log("server run on 8000! port");
})