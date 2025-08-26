const categoryModel = require("./categoryModel")
const add = (req,res)=>{
    let categoryObj = new categoryModel()
    categoryObj.name = req.body.name
    categoryObj.description = req.body.description
    categoryObj.image = req.body.image
    categoryObj.save()
    .then((categorydata)=>{
        res.send({
            status:200,
            success:true,
            message:"category added successfully!!",
            data:categorydata
        })
    })
    .catch((err)=>{
        // console.log("err is",err);
        
        res.send({
            status:500,
            success:false,
            message:"Something went wrong!!"
        })
    })
}
const getall = (req,res)=>{
    categoryModel.find()
    .then((catdata)=>{
        res.send({
                status:200,
                success:true,
                message:"Data loaded!!",
                data:catdata
        })
    })
    .catch((err)=>{
            res.send({
                status:500,
                success:false,
                messsage:"Something went wrong!!"
            })
    })
}

const getsingle =(req,res)=>{
    categoryModel.findOne({_id:req.body._id})
    .then((catdata)=>{
        res.send({
            status:200,
            success:true,
            message:"Single record loaded!!",
            data:catdata
        })
    })
    .catch((err)=>{
        res.send({
            status:500,
            success:false,
            message:"Something went wrong!!"
        })
    })
} 
module.exports = {add,getall,getsingle}