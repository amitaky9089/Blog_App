//import model
const Post=require("../models/postModel")
const Comment=require("../models/commentModel")

//logic
//here we are using save method to insert data into db.
// when we use save then we have to make objects then save it to db. 
exports.createComment=async(req,res)=>{
    try{
        
        //fetching data from req.body
        const{post,user,body}=req.body;
        //create a comment object
        //this post is post_id on which comment is made
        const comment=new Comment({
            post,user,body
        });
        //save the comment into db
        const savedcomment=await comment.save();
        //the moment we saved this comment we get corresponding id to that comment
        //the moment we save this comment by default a id is formed corresponds to this comment.
        // and we can access this id by writing savedcomment._id
        //find the post by ID and add new comment in commentsection
        //here we are saying find the Post having this id "post" and update our comments array with new id using $push operator
        //by adding new true we get new document with updated id
        // new true give us updated document
        const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments:savedcomment._id}},{new:true})
                                   .populate("comments")//used to print comments by finding theri ids
                                   .exec();
        res.json({
            post:updatePost,
        });
    }   
    catch(error){
         res.status(500).json({
            error:"error while creating comments",
          });
    }
}