const menuRouter = require("express").Router()
const {
    getMenu,
    createMenu,
    getSingleMenu,
    updateMenu,
    deleteMenuItem,
    getAllMenu 
      } = require("../controllers/MenuController")
const upload=require("../middleware/fileUploads")   

const verifyToken=require("../middleware/authmiddleware")

//for QR
menuRouter.get("/:restaurantId", getMenu);

menuRouter.post("/",verifyToken,upload.single("image"), createMenu)
menuRouter.put("/:id",verifyToken,upload.single("image"), updateMenu)
menuRouter.delete("/:id",verifyToken, deleteMenuItem)
module.exports = menuRouter
menuRouter.get("/",verifyToken, getAllMenu)
menuRouter.get("/:id",verifyToken, getSingleMenu)

