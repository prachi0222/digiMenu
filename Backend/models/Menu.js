const mongoose=require("mongoose")

const menuSchema=new mongoose.Schema({

    restaurantId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant",
        required:true
    },
    itemName:{
        type:String,
        required:[true,"Item name is Required"],
        trim:true
    },
    price:{
        type:Number,
         required:[true,"Item price is Required"],
    },
    category:{
        type:String,
         required:[true,"Item category is Required"],
         trim:true
    },
    image:{
        type:String,
         default:"",
    },
    status: {
    type: Boolean,
    default: true
}
},
{
    timestamps: true,
  })
const Menu= mongoose.model("menu",menuSchema)
module.exports=Menu