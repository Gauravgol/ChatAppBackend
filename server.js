require("dotenv").config()
const express=require('express')
const app=express()

const port=process.env.PORT || 4200;
app.listen(port,()=>{
    console.log("server started on ",port)
})

