const jwt = require("json-web-token");
const User = require("../models/User");
const test = async(req,res,next)=>
{
    if(req.headers&& req.headers.authorization){
        var token = req.headers.authorization.split(" ")[1];
        try {
            const decode = await jwt.verify(token,'fake')
            const _id = ObjectId(decode.user._id);
            const user = await User.findOne(_id)
            if(!user){
                res.status(401).json({data:"un authorized"});
                return;
            }
            next();
            
        } catch (error) {
            res.status(401).json({data:"un authorized"});
        }
    }
    next();
}
module.exports = test;