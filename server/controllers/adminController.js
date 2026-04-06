import jwt from 'jsonwebtoken'

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