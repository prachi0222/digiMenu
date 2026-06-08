const express=require("express")
const cors = require("cors");
require("dotenv").config()
require("./db-connect")

const Router=require("./routes/index")
const app=express()
app.use(express.json())

app.use(cors());
app.use("/public",express.static("./public"))

app.use("/api",Router)

const port=process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})