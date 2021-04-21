const express = require("express");
const ctrl = require("../controllers/tutorial")
const route  = express.Router();

route.post("/product",ctrl.create)
route.get("/products/:id",ctrl.findOne)
route.get("/products",ctrl.findAllPublished)

module.exports =  route
