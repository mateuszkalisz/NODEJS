const http = require('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    res.write("<h1>Serwer działa</h1>")
    res.end(
    // `<script src="./code.js"></script>`
    )
}).listen(3000, '127.0.0.1')