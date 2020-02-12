const express = require('express');
const app = express();

app.set('x-powered-by', false);

app.get('/', (req,res)=>{
    res.send("WITAJ");
});

app.get('/error', (req,res)=>{
    throw new Error('ayayay');
});

app.get('*', (req,res)=>{
    res.status(404);
    res.send('Not found');
});

app.use((err, req, res, next)=>{
    res.status(500);
    res.send('Error!');
})

exports.app = app;
