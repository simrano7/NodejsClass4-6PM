const productModel = require("./productModel")

const add = (req,res)=>{
    var errMsgs = []
    if(!req.body.name){
            errMsgs.push("name is required!!")
    }
    if(!req.body.price){
            errMsgs.push("price is required!!")
    }
    if(!req.body.image){
            errMsgs.push("image is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        // insertion code 
        // duplicacy remove
        // backend find data ->name
        productModel.findOne({name:req.body.name})
        .then((productdata)=>{
                console.log("product data ",productdata);
                if(productdata == null){
                    // insertion
                    let proobj = new productModel()
                    proobj.name = req.body.name
                    proobj.image = req.body.image
                    proobj.price = req.body.price
                    proobj.save()
                    .then((insertedproduct)=>{
                        res.send({
                            status:200,
                            success:true,
                            message:"product added successfully!!",
                            data:insertedproduct
                        })
                    })
                     .catch((err)=>{
                            console.log("err is",err);
                            
                                res.send({
                                    status:500,
                                    success:false,
                                    message:"Something went wrong!!"
                                })
                        })

                }
                else{
                    // data already exists with same name
                    res.send({
                        status:422,
                        success:false,
                        message:"data already exists with same name!!"
                    })
                }
                
        })
        .catch((err)=>{
            console.log("err is",err);
            
                res.send({
                    status:500,
                    success:false,
                    message:"Something went wrong!!"
                })
        })
    }

}
const getall = (req,res)=>{
        productModel.find(req.body)
        .then((prodata)=>{
            console.log(prodata);
            if(prodata.length === 0){
                    // console.log("data not found");
                res.send({
                    status:404,
                    success:false,
                    message:"Data not found!!!",
                }) 
            }
            else{
                // console.log("data loaded!!");
                res.send({
                    status:200,
                    success:true,
                    message:"Data loaded!!!",
                    data:prodata
                })
                
            }

            
        })
        .catch((err)=>{
            console.log("err is",err);
                res.send({
                    status:500,
                    success:false,
                    message:"Something went wrong!!"
                })
        })
}
const getsingle = (req,res)=>{
    var errMsgs = []
    if(!req.body._id){
            errMsgs.push("_id is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            messsage:errMsgs
        })
    }
    else{

        productModel.findOne({_id:req.body._id})
            .then((prodata)=>{
                console.log(prodata);
                if(prodata == null){
                    // /data not found
                    res.send({
                        status:404,
                        success:false,
                        message:"Data not found!!!",
                    })
                }
                else{
                    // data loaded
                    res.send({
                        status:200,
                        success:true,
                        message:"Data loaded!!!",
                        data:prodata
                    })
                }
    
            })
            .catch((err)=>{
                console.log("err is",err);
                    res.send({
                        status:500,
                        success:false,
                        message:"Something went wrong!!"
                    })
            })
    }
}

const getpagination = (req,res)=>{
    var errMsgs = []
    if(!req.body.pageno){
            errMsgs.push("page is required!!")
    }
    if(!req.body.limit){
        errMsgs.push("limit is required!!")
    }
    if(errMsgs.length>0){
        res.send({
            status:422,
            success:false,
            message:errMsgs
        })
    }
    else{
        var pageno = req.body.pageno
        var limit = req.body.limit
        var skip = 0
        if(pageno>1){
                skip = (pageno-1)*limit
        }
        productModel.find()
        .limit(limit)
        .skip(skip)
        .then((prodata)=>{
            
            res.send({
                status:200,
                success:true,
                messsage:"data loaded!!",
                data:prodata
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

}
module.exports = {add,getall,getsingle,getpagination}