const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
let startGame = false;

const users = [
    {
        id: 1,
        name: 'Mateusz',
        pass: 'haslo'
    },
    {
        id: 2,
        name: 'Maja',
        pass: 'haslo123'
    }
];


app.listen(port);


app.use(express.static(path.join(__dirname, '/public')));

const indexHtml = 'index.html';
const gameHtml = 'game.html';
const root = path.join(__dirname, '/public');

app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(indexHtml, {
        root: root,
    });
})

app.post('/login', (req,res)=>{

    const correctLogPass = users.findIndex(user => req.body.name === user.name && req.body.pass === user.pass);

    if(correctLogPass !== -1){
        startGame = true;
    }
    else{
        startGame = false;
    }
})

app.get('/login', (req,res)=>{
    if(startGame){
        res.redirect('/game');
    }
    else{
        res.redirect('/');
    }
})

app.get('/game', (req,res)=>{
    if(startGame){
        res.sendFile(gameHtml, {
            root: root,
        });
    }
    else{
        res.redirect('/');
    }
})

app.post('/logout', (req,res)=>{
    if(req.body.logout){
        startGame = false;
    };
})