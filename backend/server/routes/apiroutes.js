const routes = require("express").Router()

const categoryController = require("../apis/category/categoryController")

routes.post("/category/add",categoryController.add)


module.exports = routes