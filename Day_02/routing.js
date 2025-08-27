import http from 'http';

http.createServer((request, response) => {
   if (request.url === "/") {
       response.write("<h1>Welcome to my Server</h1>");
   } else if (request.url === "/about") 
    {
       response.write("<h1>About Us</h1>");
   } else if (request.url === "/contact")
     {
       response.write("<h1>This is contact page</h1>");
   } else 
    {
       response.write("<h1>404 Not Found</h1>");
   }
       
}).listen(4000,()=>{
    console.log("Server is running on port 4000")
})
