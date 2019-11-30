const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("serwerj nasluchuje na porcie 3000");
})

app.get('/',(req,res)=>{
    res.send('<a href="/go_back">Cofnij</a>');
})

app.get('/go_back', (req,res)=>{
    // res.write("Witaj");
    // res.end();

    // res.send("<h1>Witaj by resend</h1>");
    
    // const str = "Poszedł rolnik na pole";
    // const ar = str.split(" ");
    // res.send(ar);

    // res.send({
    //     raz: 1,
    //     dwa: 2,
    // })


    // res.json('razdwatrzy');

    // res.location('/another/pah');
    // res.sendStatus(302);

    res.redirect('back');

})