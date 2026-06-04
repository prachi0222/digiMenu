const jwt=require("jsonwebtoken")

function verifyToken(req,res,next) {

    try {
        const authHeader=req.headers.authorization

        if(!authHeader){
            return res.status(401).json({
                success:false,
                message:"No token provided"
            })
        }
        const token=authHeader.split(" ")[1]
        console.log("AUTH HEADER:", authHeader);
console.log("TOKEN:", token);
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        req.user=decoded
        next();
    } catch (error) {
         console.log("JWT Error:", error.message);
        res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    })
    }
    
}
module.exports=verifyToken