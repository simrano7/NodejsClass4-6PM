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

module.exports = {add}