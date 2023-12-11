const express= require('express');
const router=require('./route/routes')
const app=express();
const PORT=8080;

app.use(express.json())
app.use(router)
app.listen(PORT,()=>{
    console.log("scaning at port 8080")
});