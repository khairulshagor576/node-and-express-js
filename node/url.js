const http = require('http');

let server = http.createServer((req,res)=>{
  console.log(req.url);
  res.end("<h3>Hello, Node!</h3>");
});

server.listen(4040,()=>{
    console.log("server is running at port 4141");
});
