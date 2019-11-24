const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server is listeing at at http://localhost:3000");
});

app.get('/', (req)=>{
    if(req.protocol !== 'https') console.log("protokol niezabezpieczony");

    console.log('req orgurl' + req.originalUrl);
    console.log('req url' + req.url);
    console.log('req path' + req.path);
    console.log('req secure' + req.secure);
    console.log('req protocol' + req.protocol);
    
});
