const express = require("express");
const router = express.Router();
const path = require("path");
const test = require("../middleware/test");
const bkroute = require("./book");
router.use("/book",bkroute);
router.get("/",test,(req,res)=>{
    
    res.render("index");
})

router.post("/",(req,res)=>
{
    res.json({data:"hello from json"});
})
router.all("/*",(req,res)=>{
    res.send("Page Not Found");
})
module.exports = router;