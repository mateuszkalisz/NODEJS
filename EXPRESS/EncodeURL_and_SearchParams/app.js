const express = require('express');

const app = express();
const port = process.env.PORT || 3200;

app.listen(port, ()=>console.log(`teraz nasluchuje na porcie ${port}`));

app.get('/hello/new-user', (req,res)=>{
    // console.log(req.query);
    // console.log(req.get('Referrer'));
    console.log("dodawanie nowej osoby")
})

app.get('/hello/:name', (req,res)=>{
    // console.log(req.query);
    // console.log(req.get('Referrer'));
    console.log("witaj " + req.params.name);
})

app.get('/article/:id/:title?', (req,res)=>{
    // console.log(req.query);
    // console.log(req.get('Referrer'));
    console.log(`artykul: ${req.params.id} ${req.params.title == undefined ? "" : req.params.title}`);
})


// app.get('/1', (req,res)=>{
//     // console.log(req.query);
//     // console.log(req.get('Referrer'));
//     console.log("informacje szczegolowe o osobie 1");
// })

// app.post('/1', (req,res)=>{
//     // console.log(req.query);
//     // console.log(req.get('Referrer'));
//     console.log("dodajemy nowa osobe");
// })

// app.patch('/1', (req,res)=>{
//     // console.log(req.query);
//     // console.log(req.get('Referrer'));
//     console.log("aktualizacja osoby 1");
// })


// app.delete('/1', (req,res)=>{
//     // console.log(req.query);
//     // console.log(req.get('Referrer'));
//     console.log("usuwanie osoby 1");
// })

