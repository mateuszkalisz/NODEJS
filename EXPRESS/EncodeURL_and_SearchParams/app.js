const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.all('/', (req,res)=>{
    console.log(req.query);
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, ()=>console.log(`teraz nasluchuje na porcie ${port}`));