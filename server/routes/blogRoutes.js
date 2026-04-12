import express from "express"
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const blogRouter= express.Router();

blogRouter.post('/add', upload.single('image'), auth ,addBlog);
blogRouter.get('/all', getAllBlogs);

blogRouter.get('/comments', getBlogComments);
blogRouter.get('/:blogId', getBlogById);

//only admin can delete it so auth middleware
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish',auth, togglePublish);

blogRouter.post('/add-comment', addComment);

export default blogRouter;