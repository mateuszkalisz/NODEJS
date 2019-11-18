const http = require('http');
const server = http.createServer();

server.addListener('request', (request, response)=>{
    response.writeHead(200, {'Content-type':'text/html'});
    response.end('<h1>Hello</h1>');
});

server.listen(3000, '127.0.0.1');

