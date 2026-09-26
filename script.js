//import http from "node:http"
const http = require('http')

const PORT = 3000;
const server = http.createServer((req,res)=>{
    res.end("We are learning backend!")
})

server.listen(PORT, ()=>{
    console.log(`Port is successfully running on port ${PORT}`)
})
