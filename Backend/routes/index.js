const Router=require("express").Router()

const restauentRouter=require("./restaurantRoutes")
const menuRouter = require("./menuRouter")

Router.use("/restaurant",restauentRouter)
Router.use("/menu",menuRouter)
module.exports=Router