const restaurantRouter=require("express").Router()

const {createRestaurant, getRestaurantRecord, getAllRecord}=require("../controllers/RestaurantController")

restaurantRouter.post("/",createRestaurant)
restaurantRouter.get("/",getAllRecord)
restaurantRouter.get("/:id",getRestaurantRecord)
module.exports=restaurantRouter