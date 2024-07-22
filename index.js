// const app =require('express')();

// const server=require('http').createServer(app);
// const io=require('socket.io')(server)
const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
const socket=require('socket.io');
const io=socket(server,{
    cors:{
        origin:"*",
    }
})

io.on("connection",(socket)=>{
     
    console.log("socket is active")

    socket.on("chat",(payload)=>{
        console.log("Payload",payload);
        io.emit('chat',payload)
    })
})
 
server.listen(3333,()=>{
    console.log("Server is started")
})