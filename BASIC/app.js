const express = require('express');
const app = express();

app.set('x-powered-by', false);

app.get('/', (req,res)=>{
    res.send("WITAJ");
});

exports.app = app;
