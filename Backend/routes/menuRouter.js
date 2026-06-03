const menuRouter=require("express").Router()
const { createMenu, getMenu, updateMenu, deleteMenuItem, getAllMenu }=require("../controllers/MenuController")
menuRouter.post("/",createMenu)
menuRouter.get("/",getAllMenu)
menuRouter.get("/:restaurantId",getMenu)
menuRouter.put("/:id",updateMenu)
menuRouter.delete("/:id",deleteMenuItem)
module.exports=menuRouter