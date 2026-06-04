
const Menu = require("../models/Menu")
const fs = require("fs");
async function createMenu(req, res) {
    try {
        const data = new Menu(req.body)

        if (req.file) {
            data.image = req.file.path
        }
        await data.save()

        res.status(201).json({
            success: true,
            message: "Menu created Successfully",
            data
        })
    } catch (error) {
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path)
        }
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
        });

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
//----------------------------------
async function getSingleMenu(req, res) {
    try {
        const data = await Menu.findById(
            req.params.id
        )
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Menu Item Not Found"
            });
        }


        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
async function getAllMenu(req, res) {
    try {
        const data = await Menu.find().sort({ createdAt: -1 })
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}
async function updateMenu(req, res) {
    try {
        const data = await Menu.findById(req.params.id)
        if (!data) {
          return  res.status(404).json({
                success: false,
                message: "Menu does not Exist"
            })

        }
        data.itemName = req.body?.itemName ?? data.itemName
        data.price = req.body?.price ?? data.price
        data.category = req.body?.category ?? data.category
        
        data.status = req.body?.status ?? data.status
        if ( req.file) {
            if (data.image && fs.existsSync(data.image)) {
                fs.unlinkSync(data.image);
            }
            data.image = req.file.path
            
        }
         await data.save()
        res.status(200).json({
            success: true,
            data
        })
    } catch (error) {
        if(req.file && fs.existsSync(req.file.path)){
                    fs.unlinkSync(req.file.path)
                }
        res.status(500).json({
            success: false,
            message: error.message
        })
    }


}
async function deleteMenuItem(req, res) {
    try {
        const data = await Menu.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Menu Item Not Found"
            })
        }
         if(data.image && fs.existsSync(data.image)){
                    try {
                        fs.unlinkSync(data.image)
                    } catch (error) { 
                        console.log("Image delete error:", error.message)
                    }}
        await data.deleteOne()
        res.status(200).json({
            success: true,
            message: "Menu Item Deleted"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

module.exports = {
    createMenu,
    getAllMenu,
    getMenu,
    getSingleMenu,
    updateMenu,
    deleteMenuItem
}