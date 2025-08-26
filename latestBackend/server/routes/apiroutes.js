const routes = require("express").Router()

const categoryController = require("../apis/category/categoryController")
const productController = require("../apis/product/productController")
routes.post("/category/add",categoryController.add)
routes.post("/category/all",categoryController.getall)
routes.post("/category/single",categoryController.getsingle)


// products
routes.post("/product/add",productController.add)
routes.post("/product/all",productController.getall)
routes.post("/product/single",productController.getsingle)
routes.post("/product/pagination",productController.getpagination)
routes.post("/product/update",productController.update)

module.exports = routes