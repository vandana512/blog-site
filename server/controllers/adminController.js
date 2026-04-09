import jwt from 'jsonwebtoken'
import Blog from '../models/Blog';
import Comment from '../models/Comment';

export const adminLogin= async(req, res)=>{
    try{
        //extract email and pass from req body
        const {email, password} = req.body;

        //pass not matching
        if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
            return res.status(409).json({
                message: "invalid credentials"
            })
            
        }

        const token= jwt.sign({email}, process.env.JWT_SECRET)

        res.status(201).json({
            message: "user logged in successfully",
            token
        })


    }
    catch(error){
        res.json({success: false, message:error.message})
    }
    
}

export const getAllBlogsAdmin= async(req, res)=>{
    try{
        const blogs= (await Blog.find({})).sort({createdAt:-1});
        res.status(201).json({
            message: "all bogs shown",
            blogs
        })

    }
    catch(error){
        res.json({success: false, message:error.message})
    }
    
}

export const getAllComments= async(req, res)=>{
    try{
        // .find({})se sa return krta hai
        const comments= (await Comment.find({})).populate('blog').sort({createdAt:-1});
        res.status(201).json({
            message: "all comments shown",
            comments
        })

    }
    catch(error){
        res.json({success: false, message:error.message})
    }
    
}

export const getDashboard= async(req, res)=>{
    try{
        const recentBlogs= (await Blog.find({})).toSorted({createdAt: -1}).limit(5);

        const blogs= await Blog.countDocuments();
        const comments= await Comment.countDocuments();

        const drafts= await Blog.countDocuments({isPublished: fasle});

        const dashboardData= {
            blogs, comments, drafts, recentBlogs
        }

        res.status(201).json({
            message: "data fetched",
            dashboardData
        })

    }
    catch(error){
        res.json({success: false, message:error.message})
    }
    
}