//mongoose help us to define schema 
const mongoose=require("mongoose");

//comment section schema consist of on which post comment is made,who made comment and what comment is made.
//creating comment schema
const commentSchema=new mongoose.Schema({
   //first part of comment schema is post 
   post:{
    //it means we are storing id of an object and define it type that this object type is post (in our case).
    // as post is itself a model therefore we have to refer it id
      // it means post is of id type
      type:mongoose.Schema.Types.ObjectId,//iska mtlb sirf itna  hai ki mai id refer krna chahta hu
      //and in reference we write which model object id we wnat to refer
      ref:"Post",//reference to post model
   },
   user:{
      type:String,
      required:true, 
   },
   body:{
      type:String,
      required:true,
   }
})

// here we are exporting commnet schema with name "Commnet".
module.exports=mongoose.model("Comment",commentSchema);