//importing express instance
const express=require("express");
//importing router from express
const router=express.Router();

//Import controller

const {likecontrol}=require("../controllers/likeController");
const {createComment}=require("../controllers/commentController");
const {createPost,getAllPosts}=require("../controllers/postController")
const {likePost,unlikePost}=require("../controllers/likeController")

router.get("/dummy",likecontrol);

router.post("/create/comment",createComment);
router.post("/create/post",createPost);
router.get("/get/all",getAllPosts)
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

//export
module.exports=router;