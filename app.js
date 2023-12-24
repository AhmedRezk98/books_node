const http = require("http");
const fs = require("fs");
const port = 3000;
const server = http.createServer((req,res)=>{
if(req.url == '/')
{
fs.readFile("./page/home.html","utf8",(err,data)=>{
    if(err) throw err;
    res.write(data);
    res.end();
})


}
else if(req.url == '/about')
{
res.write("about");
res.end();
}
else
{
res.writeHead(200,{"content-type": "text/html"});
res.write("<h1>not found</h1>");
res.end();
}
})
console.log(`server is listen on ${port}`);
server.listen(port);