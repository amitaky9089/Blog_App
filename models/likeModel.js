//importing mongoose
const mongoose=require("mongoose");

//like schema contains on which post like is done and by whom 
const likeSchema=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
});

//export likeschema by the name of "Like".
module.exports=mongoose.model("Like",likeSchema);
