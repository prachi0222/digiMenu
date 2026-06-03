
const Menu = require("../models/Menu")

async function createMenu(req, res) {
    try {
        const data = new Menu(req.body)
        await data.save()
        res.status(201).json({
            success: true,
            message: "Menu created Successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
//this is for qrcode generator
async function getMenu(req, res) {
    try {
        const data = await Menu.find({
            restaurantId: req.params.restaurantId
        })
    
       
            
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
async function getAllMenu(req, res) {
    try {
        const data = await Menu.find().sort({createdAt:-1})    
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }

}
async function updateMenu(req,res) {
     try {
        const data = await Menu.findById(req.params.id)
       if(!data){
         res.status(404).json({
            success:false,
            message:"Menu does not Exist"
        })
        
       }
       data.itemName=req.body.itemName??data.itemName
        data.price=req.body.price??data.price
        data.category=req.body.category??data.category
        data.image=req.body.image??data.image
        data.status=req.body.status??data.status
       await data.save()
            
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }


}
async function deleteMenuItem(req,res) {
    try {
        const data=await Menu.findById(req.params.id)
        if(!data){
           return res.status(404).json({
                success:false,
                message:"Menu Item Found"
            })
        }
        await data.deleteOne()
        res.status(200).json({
            success:true,
            message:"Menu Item Deleted"
        })
    } catch (error) {
         res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}

module.exports = {
    createMenu,
    getAllMenu,
    getMenu,
    updateMenu,
    deleteMenuItem
}