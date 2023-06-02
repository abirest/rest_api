const express = require("express");
require('dotenv').config();
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/userRoutes")



const app = express();
connectDB();
//middleware
app.use(express.json());
app.use("api/user",userRouter)

const PORT = process.env.PORT || 8020

app.listen(PORT,(err)=>{
    err? console.log(err) : console.log(`server is running on port ${PORT}`)
})