const express = require('express');
const gameRoutes = require('./routes/game');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');


app.listen(port, ()=>{
    console.log(`server is listening at port: ${port}`);
});

app.use(express.static(
    path.join(__dirname, 'public'),
));

gameRoutes(app);
