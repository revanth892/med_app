const express=require("express");
const userController=require('../controllers/userController');
const ngoController=require('../controllers/ngoController');
const router = express.Router();

//get requests
router.get("/test1",(req,res,next)=>{
    console.log("testing");
    res.send("testing at router level");
})

//post requests for users
router.post("/createUser",userController.createUser)
router.post("/loginUser",userController.loginUser)

//post requests for ngo
router.post("/registerNGO",ngoController.registerNGO)
router.post("/loginNGO",ngoController.loginNGO)

module.exports=router;