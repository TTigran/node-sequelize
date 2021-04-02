const express = require("express");
const ctrl =require("../controllers/tutorial")
const route  = express.Router();

route.post("/tutorial",ctrl.create)
route.get("/tutorial/:id",ctrl.findOne)
route.get("/tutorial",ctrl.find)
module.exports =  route
