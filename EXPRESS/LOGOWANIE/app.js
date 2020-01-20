const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const cookieParser = require('cookie-parser');
let startGame = false;
let cookieName = "";
let result = {
    points: 0,
    wins: 0,
    draws: 0,
    losses: 0,
};

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

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '/public')));

const indexHtml = 'index.html';
const gameHtml = 'game.html';
const root = path.join(__dirname, '/public');

app.use(express.json());

app.get('/', (req,res)=>{

    res.clearCookie('visitor_name');

    res.sendFile(indexHtml, {
        root: root,
    });
})

app.post('/login', (req,res)=>{

    const correctLogPass = users.findIndex(user => req.body.name === user.name && req.body.pass === user.pass);

    if(correctLogPass !== -1){
        startGame = true;
        cookieName = req.body.name;
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
    // const dt = new Date();
    // dt.setDate(dt.getDate()+7);

    if(startGame){

        const cookieDt = 3 * 24 * 60 * 60 * 1000;
        res.cookie('visitor_name', cookieName, {
            // expires: dt,
            maxAge: cookieDt,
        });

        res.sendFile(gameHtml, {
            root: root,
        });
    }
    else{

        res.redirect('/');
    }
})

app.post('/logout', (req,res)=>{

    console.log(req.body);

    if(req.body.logout){
        startGame = false;
        res.redirect('/logout');
    };
})

app.get('/logout', (req,res)=>{
    
    res.clearCookie('visitor_name');
    res.end();
    result.points = 0;
    result.wins = 0;
    result.draws = 0;
    result.losses = 0;
})

app.get('/summary', (req,res)=>{
    res.json({
        points: result.points,
        wins: result.wins,
        draws: result.draws,
        losses: result.losses,
        name: req.cookies.visitor_name,
    });
})

function renderResults(score){
    if(score == 0){
        result.losses++;
    }
    else if(score == 1){
        result.points++;
        result.draws++;
    }
    else if(score == 3){
        result.points++;
        result.points++;
        result.points++;
        result.wins++;
    }
}

app.post('/whoWin', (req,res)=>{
    const {score} = req.body;
    renderResults(score);
})