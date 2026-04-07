
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
    }
    catch(error){

    }
}