const http = require('http');

const port = process.env.PORT || 3000;

http.createServer((req,res)=>{
    // console.log(req.url);
    // console.log(req.method);

    if(req.url === "/"){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("<h1>Strona główna</h1>");
    }
    else if(req.url ==="/users"){
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
        res.end("<p>Strona uzytkownika</p>");
    }

    else{
        res.writeHead(404, {"Content-type":"text/html;charset=utf-8"});
        res.end("<div>Brak takiej strony</div>");
    }

    // res.end(req.url);
}).listen(port, '127.0.0.1', ()=>{
    console.log(`nasz serwer nasluchuje na porcie ${port}`);
})


