const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("json-web-token");
const slatround = 10;
exports.signup = async(req,res)=>{
    const password = bcrypt.hash(req.body.password,slatround);
    const data = {...req.body,password};
    const user = await User.create(data);
    res.json({user});
}
exports.login = async(req,res)=>{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        res.status(404).json({data:"not found"});
        return;
    }
    if(!await bcrypt.compare(req.body.password,user.password)){
        res.status(404).json({data:"not found"});
        return;
    }
    const token = await jwt.sign({user},'fake');
    res.json({user,access_token:token});
}