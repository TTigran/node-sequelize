const express = require("express");
const ctrlProducts = require("../controllers/products")
const ctrlUsers = require("../controllers/users")
const route  = express.Router();

route.post("/products",ctrlProducts.createProduct)
route.get("/products/:id",ctrlProducts.findOne)
route.get("/products",ctrlProducts.findAllPublished)


route.post("/users",ctrlUsers.createUser)
route.get("/users",ctrlUsers.getAll)


module.exports =  route
