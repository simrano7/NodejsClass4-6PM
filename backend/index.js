// console.log("project created!!");
const express = require("express")
const app = express()
const data = require("./data")
const db = require("./server/config/db")
// app.method("path",()=>{})
app.use(express.urlencoded({extended:true}))

const apiroutes = require("./server/routes/apiroutes")
app.use("/apis",apiroutes)
// console.log("data is ",data);
// console.log("data is ",data);


// basic api syntax
// get and post 

// app.method(path,(req,res)=>{})
app.get("/",(req,res)=>{
    res.send({
        status:200,
        success:true,
        message:"Welcome !!!"
    })
})
app.get("/about",(req,res)=>{
    res.send({
        status:200,
        success:true,
        message:"About api call!!",
        data:data
    })
})
app.post("/contact",(req,res)=>{
    console.log("query params",req.query);
    res.send({
        status:200,
        success:true,
        message:"contact api call!!",
        data:"name is "+req.query.name,
        rollno:"rollno is "+req.query.rollno
    })
})
app.get("/gallery",(req,res)=>{
    res.send({
        status:200,
        success:true,
        message:"Gallery api call"
    })
})
app.get("/paramsapi/:name",(req,res)=>{
    console.log(req.params);
    
    res.json({
        status:200,
        success:true,
        message:"params api call"
    })
})

app.post("/persons",(req,res)=>{
    console.log("query params",req.query);

    res.send({
        status:200,
        success:true,
        message:"persons api create!!",
        data:req.query.name
    })
})
app.post("/city/:name/:pincode",(req,res)=>{
    console.log("params",req.params);
    
    res.send({
        status:200,
        success:true,
        message:"city api create!!",
    })
})

app.listen(5000,(err)=>{
        if(err != null){
                console.log("err while connecting server",err);
                
        }
        else{
            console.log("Server connected!!",5000);
            
        }
})


// express 
// npm i express
