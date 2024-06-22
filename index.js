//creating server 
                          //lecture-3 and lecture-4
                             //Blog app
const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 3000;

// middleware
app.use(express.json());

//importing all our routes
const blog=require("./routes/blog");

//mounting routes
app.use("/api/v1",blog);

//connecting with database
const connectwithdb=require("./config/databases");
connectwithdb();

//server starting 
app.listen(PORT,()=>{
    console.log(`Server is running successfully at ${PORT} PORT number.`)
})

//creating default route
app.get('/',(req,res)=>
{
    res.send("<h1>This is a blog app</h1>")
})

