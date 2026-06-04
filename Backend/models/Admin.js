const mongoose=require("mongoose")

const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email Address is required"]
    },
    password:{
        type:String,
        required:[true,"Password Field is Required"]
    },
    role:{
        type:String,
        default:"Admin"
    }
},{
    timestamps:true
})
const Admin=mongoose.model("Admin",adminSchema)
module.exports=Admin