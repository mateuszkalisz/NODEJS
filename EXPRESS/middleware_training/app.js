const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cookieParser = require('cookie-parser');

app.listen(port, ()=>console.log("nasluchuje na porcie " + port));

app.use(express.json());
// app.use(express.static(
//     path.join(__dirname, 'static'),
// ))

app.use(cookieParser());


app.get('/', (req,res)=>{

    console.log('reqcookies:', req.cookies);
    console.log('reqsignedcookies: ' , req.signedCookies);

    const {visitor_name} = req.cookies;

    if(visitor_name){
        res.send(`Witaj ${visitor_name}`);
    }
    else{
        res.send("czy my sie znamy?");
    }

})


app.post('/hello', (req,res)=>{
    const {name, surname} = req.body;

    res.send(`Witaj ${name} ${surname}`);

})

app.get('/hi/:name', (req,res)=>{
    const {name} = req.params;
    res.cookie('visitor_name', name, {
        maxAge: 10*60*1000,
    });
    res.send("imie zapisano");

})