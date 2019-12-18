const express = require('express');
const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

client.connect(err =>{
    if(err){
        console.log("błąd połączenia", err);
    }
    else{
        console.log("połączenie udane!");

        const db = client.db('test');
        const todolist = db.collection('todolist');

        todolist.find({}).toArray((err,todo)=>{
            if(err){
                console.log("bledne zapytanie");
            }
            else{
                console.log(todo);
            }
        });
        client.close();
    }
})

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