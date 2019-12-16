const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.listen(port, ()=>{
    console.log(`serwer nasluchuje na porcie ${port}`);
})

app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', (req,res)=>{
//     res.send(__dirname);
// })