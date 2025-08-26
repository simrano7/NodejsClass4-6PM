const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{type:String,default:""},
    image:{type:String,default:"noimage.jpg"},
    price:{type:Number,default:0},
    status:{type:Boolean,default:true},
    createdAt:{type:Date,default:Date.now()},
})
module.exports = new mongoose.model("products",productSchema)