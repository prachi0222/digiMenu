const Router=require("express").Router()

const restauentRouter=require("./restaurantRoutes")
const menuRouter = require("./menuRouter")
const authRouter=require("./authRoutes")

console.log("All routes loaded");

Router.use("/restaurant",restauentRouter)
Router.use("/menu",menuRouter)
Router.use("/auth",authRouter)
module.exports=Router