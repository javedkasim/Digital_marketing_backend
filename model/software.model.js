const mongoose = require("mongoose");

const softwareSchema =  new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true});

const Software = mongoose.model("softwares", softwareSchema);
module.exports = { Software };