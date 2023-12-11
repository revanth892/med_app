const userController={
    createUser: async(req,res,next)=>{ 
        const {username,password,fullname}=req.body;
        try{
            console.log(username,password,fullname)
            return res.status(200).json({message:"user creation success"})
        }
        catch(err)
        {
            return res.status(400).json({message:err.message,error:"user creation success"})
        }
    },
    loginUser: async(req,res,next)=>{ 
        const {username,password}=req.body;
        try{
            console.log(username,password)
            return res.status(200).json({message:"user login success"})
        }
        catch(err)
        {
            return res.status(400).json({message:err.message,error:"user creation success"})
        }
    },
}

module.exports=userController;