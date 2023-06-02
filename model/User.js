const mongoose = require("mongoose");
const {Schema, model} = mongoose; 

const userSchema = new Schema({
    name : {type:String, required:true},
    email: {type:String, required:true, unique:true},
    phone: String
})

const User = mongoose.model("Users", userSchema);


module.exports = User