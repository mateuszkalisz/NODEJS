const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const alert = require('alert-node');

app.listen(port, ()=> console.log(`nasluchuje na porcie ${port}`));

app.get('/', (req,res)=>{
    res.send("Witaj na stronie glownej");
})

app.get('/hi/:name', (req,res)=>{
    const {name} = req.params;

    const dt = new Date();
    dt.setDate(dt.getDate()+7);
    res.cookie('visitor_name', name, {
        // expires: dt,
        maxAge: 10*60*1000, //ciastko po 10 min zostaje usuniete
        httpOnly: true,
    });
    res.send("Imie zapisano");
})

app.get('/logout', (req,res)=>{
    res.clearCookie('visitor_name');
    alert("Wlasnie zostałeś wylogowany!");
    res.redirect('/');

})