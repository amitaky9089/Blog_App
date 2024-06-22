const mongoose=require("mongoose");
//mongoose help to build connection between database and server
require("dotenv").config();
//it means everything we defined in env load in process object.
const connectwithdb=()=>{

   mongoose.connect(process.env.DATABASE_URL)
   .then(console.log("Connection with database successfull."))
   .catch((error)=>{
        console.log("Database connection is facing some issue.");
        console.log(error);
        process.exit(1);
   })
};

module.exports=connectwithdb; 