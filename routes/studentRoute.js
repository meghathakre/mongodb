const express=require("express");
const route=express.Router();
const StuController=require("../controller/studentController");

route.get("/home",StuController.homepage);
route.post("/insert",StuController.studentSave);
route.get("/display",StuController.studentDisplay);
route.post("/search",StuController.studentSearch);
route.get("/searchbyquery",StuController.stuSearchByQuery);
route.post("/savecreate",StuController.stuSaveCreate);


module.exports=route;