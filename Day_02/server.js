const server= require("http")
//notes arrow function 
server.createServer((request,response)=> {
    response.write("<h1>Welcome to my Server</h1>")
    response.end("")


    

}).listen(4000,()=>{
    console.log("Server is running on port 4000")
})