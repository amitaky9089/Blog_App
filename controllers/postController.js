const Post=require("../models/postModel");

exports.createPost=async(req,res)=>{
     try{
        //fetching title and body from url
         const{title,body}=req.body;
         //creating a object
         const post=new Post({
            title,body,
         });
         // saved in database
         const savedPost=await post.save();
         res.json({
            post:savedPost,
         });
     }
     catch(error){
         return res.status(500).json({
            error:"error while creating post controller",
         });
     }
};

exports.getAllPosts=async(req,res)=>{
    try{
    const posts=await Post.find().populate("comments").populate("likes").exec();
    res.status(200).json({
        Post:posts,
    })
    }
    catch(error){
        return res.status(500).json({
            error:"error while finding all post",
        })
    }
}

