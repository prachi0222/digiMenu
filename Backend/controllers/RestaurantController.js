const Restaurant=require("../models/Restaurant")

async function createRestaurant(req,res) {
    
    try {
        const data=new Restaurant(req.body)
        await data.save()

        res.status(201).json({
            success:true,
            message:"Restaurant Created successfully",
            data
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
async function getRestaurantRecord(req,res) {
    try {
        const data = await Restaurant.findById(req.params.id) 
        if(!data){
            return res.status(404).json({
                success:false,
                message:"Restaurant not found"
            })
        }           
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

async function getAllRecord(req,res) {
    try {
        const data = await Restaurant.find() 
           
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

module.exports={
    createRestaurant,
    getRestaurantRecord,
    getAllRecord
}
