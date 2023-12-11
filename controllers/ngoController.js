const ngoController={
    registerNGO: async(req,res,next)=>{ 
        const {ngo_name,otherdetails}=req.body;
        try{
            console.log(ngo_name,otherdetails)
            return res.status(200).json({message:"ngo registration success"})
        }
        catch(err)
        {
            return res.status(400).json({message:err.message,error:"user creation success"})
        }
    },
    loginNGO: async(req,res,next)=>{ 
        const {ngo_name,password}=req.body;
        try{
            console.log(ngo_name,password)
            return res.status(200).json({message:"ngo login success"})
        }
        catch(err)
        {
            return res.status(400).json({message:err.message,error:"user creation success"})
        }
    },
}

module.exports=ngoController;