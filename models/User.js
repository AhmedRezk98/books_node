const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    title : {
        type : String,
        required:true
    },
    author : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});
module.exports = mongoose.model("User",UserSchema);