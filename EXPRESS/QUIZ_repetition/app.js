const express = require('express');
const gameRoute = require('./routes/game');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.listen(port, ()=>{
    console.log(`serwer nasluchuje na porcie ${port}`);
})

app.use(express.static(
    path.join(__dirname, 'public'),
))

gameRoute(app);