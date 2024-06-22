//import mongoose
const mongoose=require("mongoose");

// postschema contains title  body like array and comment array
const postSchema=new mongoose.Schema({
     title:{
        type:String,
        required:true,
     },
     body:{
        type:String,
        required:true,
     },
     //as info(id) of object who likes the post is present in like model therefore we have to refer like model to get their ids.
     likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like",
     }],
     // as info(id) of object who commented on the post is present in comment model therefore we have to refer comment model to get their ids.
     comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
     }]

})

//exporting postschema with name "Post".
module.exports=mongoose.model("Post",postSchema);