import fs from 'fs'
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js'

export const addBlog= async(req, res)=>{
    try{
        const {title, subTitle, description, category, isPublished}= JSON.parse(req.body.blog);
        const imageFile= req.file;
        
        // check if all fields are present
        if(!title || !description || !category || !isPublished){
            return res.status(401).json({
                message: "missing requred fields"
            })
        }

        const fileBuffer=fs.readFileSync(imageFile.path)

        //upload image to imagekit
        const response= await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation :[
                {quality: 'auto'}, // auto compression
                {format: 'webp'}, // convert to modern format
                {width: '1280'} // width resizing
            ]
        });

        const image= optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished})

        res.status(201).json({
            message:"blog added succesfully"
        })
    }
    catch(error){
        res.json({
            success: false,
            message:error.message
        })
    }
}