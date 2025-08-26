const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/mern4-6PM")
mongoose.connect("mongodb://127.0.0.1:27017/mern4-6PM")
.then(()=>{
    console.log("database connected!!");
    
})
.catch((err)=>{
    console.log("err while connecting db",err);
    
})