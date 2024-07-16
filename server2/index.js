const express=require("express")
const mongoose=require("mongoose")
const bodyParser = require('body-parser');
const cors =require("cors");

const app=express()

app.use(express.json());

const UserRoute=require("./routes/UserRoute")
const PostRoute=require("./routes/PostRoute")


app.use(bodyParser.json({ limit: "30mb", extended: true })) 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 


app.use(cors())


mongoose.connect('mongodb://127.0.0.1:27017/Project2') 

app.use('/user', UserRoute);
app.use("/post",PostRoute)

app.listen(4001,()=>{
    console.log("server running")
}) 
