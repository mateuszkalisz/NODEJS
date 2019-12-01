const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`serwer nasluchuje na porcie ${port}`);
})

// app.get('/', (req,res)=>{
//     res.send(`<!DOCTYPE html>
//     <html>
//     <body>
//     <img src="/logo">
//     </body>
//     </html>`)
// })

app.get('/', (req,res)=>{
    const fileName = 'index.html';
    res.sendFile(fileName, {
        root: __dirname,
    });
    // console.log(fileName);
})


// app.get('/logo', (req,res)=>{
//     const fileName = 'node_express_logo.png';
//     res.sendFile(fileName, {
//         root: path.join(__dirname, 'img'),
//     });
// })


// app.get('/logo', (req,res)=>{
//     const fileName = 'node_express_logo.png';
//     res.attachment(fileName, {
//         root: path.join(__dirname, 'img'),
//     });
//     res.end();
// })

app.get('/logo', (req,res)=>{
    const fileName = path.join(__dirname, 'img/node_express_logo.png');
    res.download(fileName, 'Jakis_moj_plik.png');
})