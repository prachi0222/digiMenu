const mongoose=require("mongoose")

const restaurantSchema=new mongoose.Schema({

    restaurantName:{
        type:String,
       required:[true,"Restaurant Name is Required"],
        trim:true
    },
    ownerName:{
        type:String,
        required:[true,"Restaurant Owner Name is Required"],
        trim:true
    },
   
    email:{
        type:String,
        unique:true,
        required:[true,"User email Address is Required"],
        lowercase: true,
        trim: true
    },
    phone:{
        type:String,
        required:[true,"User phone number is Required"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"User password field is Required"]
    },
    
    address:{
        type:String,
        default:""
    },
    
    logo: {
      type: String,
      default: "",
    },
    status:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true
})
const Restaurant=mongoose.model("Restaurant",restaurantSchema)
module.exports=Restaurant