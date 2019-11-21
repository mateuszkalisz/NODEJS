const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    switch(req.url){
        case '/':
            fs.readFile(path.join(__dirname, 'index.html'), (err,page)=>{
                if(err) return res.end("nie udalo sie pobrac pliku");
                else return res.end(page);
            });
            // res.end("Strona glowna");
            break;
        case '/users':
            fs.readFile(path.join(__dirname, 'users.html'), (err,page)=>{
                if(err) return res.end("nie udalo sie pobrac pliku");
                else return res.end(page);
            })
            // res.end("Strona uzytkownikow");
            break;
        case '/api/users':
            res.end("API");
            break;
        default:
            res.end("Strona nie istnieje");
    }
}).listen(port, '127.0.0.1', ()=>{
    console.log(`nasz serwer nasluchuje na porcie ${port}`);
})


