const express=require("express");
const route=express.Router();
const StuController=require("../controllers/studentcontroller");

route.get("/stuinfo",StuController.stuInformation);
route.post("/datasave",StuController.stuDataSave)

module.exports=route;