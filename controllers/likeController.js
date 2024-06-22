const Post=require("../models/postModel");
const Like=require("../models/likeModel");

exports.likePost=async(req,res)=>{

    try{

    //fetching required data
    const{post,user}=req.body;
    //create a new object
    const like=new Like({
        post,user,
    })
    //saving our object
    const savedLike=await like.save();
    //updating post on the basis of likes
    const updatePost=await Post.findByIdAndUpdate(post,{$push:{likes:savedLike._id}},{new:true})
                           .populate("likes").exec();
    res.status(200).json({
        post:updatePost, 
    })
}
   catch(error){
       return res.status(500).json({
          error:"error occurs during likepost controller."
       })
   }
}


exports.unlikePost=async(req,res)=>{
    try{
         const{post,like}=req.body;
         const deletedLike=await Like.findOneAndDelete({post:post,_id:like});
         //updating post model
         const updatePost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true})
            .populate("likes").exec();
         res.status(200).json({
            post:updatePost,
         })
    }
    catch(error){
           return res.status(500).json({
               error:"error during unlike",
           });
    }
};





























exports.likecontrol=(req,res)=>{
    res.send("this is dummypage");
}