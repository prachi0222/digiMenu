const Admin = require("../models/Admin")
const passwordValidator=require("password-validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const schema = new passwordValidator();

schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase()                              // Must have at least 1 uppercase letters
    .has().lowercase()                              // Must have at least 1 lowercase letters
    .has().digits(1)                                // Must have at least 1 digits
    .has().symbols(1)                                // Must have at least 1 special character
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

async function register(req, res) {
    try {
        const { name, email, password, role } = req.body
        const existing = await Admin.findOne({ email })
        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists"
            })
        }

       const validatepassword=schema.validate(password)
       if(!validatepassword){
        return res.status(400).json({
            success:false,
            message:"Password must be 8+ characters with uppercase, lowercase, number, and symbol"
        })
       }

        const hashPassword = await bcrypt.hash(password, 10)

        const admin = new Admin({
            name,
            email,
            password: hashPassword,
            role
        })

         await admin.save()

        res.status(201).json({
            success: true,
            message: "Admin registered successfully",
        });
       
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }

}

async function login(req,res) {
    try {
        const {email, password}=req.body

        const admin=await Admin.findOne({email})
        if(!admin){
            return res.status(400).json({
                success:false,
                message:"Admin not found"
            })
        }
        const ispassword=await bcrypt.compare(password,admin.password)
        if(!ispassword){
             return res.status(400).json({
        success: false,
        message: "Invalid username or password",
      })
        }

        const token=jwt.sign({
            id:admin._id,
            role:admin.role,
            email:admin.email,
        },
        process.env.JWT_SECRET_KEY,{expiresIn:"1d"}
    )
    res.status(200).json({
        success:true,
        message:"Login successful",
        token,
        admin: {
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}
module.exports={
    register,
    login
}