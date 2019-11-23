const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;

const users = [
    {name: "Adam", id: 1},
    {name: "Ewa", id: 2}
]

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
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
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            const usersJSON = JSON.stringify(users);
            console.log(usersJSON);
            res.end(usersJSON);
            break;
        case '/code.js':
            res.writeHead(200, {'Content-Type': 'application/javascript; charset=utf-8'});
            fs.readFile(path.join(__dirname, 'code.js'), (err,page)=>{
                if(err) return res.end("nie udalo sie pobrac pliku");
                else return res.end(page);
            })
            break;
        default:
            res.end("Strona nie istnieje");
    }
}).listen(port, '127.0.0.1', ()=>{
    console.log(`nasz serwer nasluchuje na porcie ${port}`);
})


