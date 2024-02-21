require("dotenv").config()
const  express = require("express")
const path = require("path")
const app = express()
const socketIO = require("socket.io")
const http = require("http")
const server =  http.createServer(app)
const io = socketIO(server)
 



 

 app.get('/' ,(req  , res)=>{
    res.sendFile(path.join(__dirname , 'index.html'))
 })

 io.on( 'connection' , (socket)=>{
   console.log(" a user connected")

})



 


 // Listners
 const PORT = process.env.PORT
 server.listen(PORT , ()=>{
    console.log(` Server is Started at http://localhost:${PORT}`)
 })
