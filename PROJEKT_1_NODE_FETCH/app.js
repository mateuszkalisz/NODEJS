// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

const year = process.argv[2] || Math.floor(Math.random()*2020);


const pathToFetch = `http://numbersapi.com/${year}/year?json`


fetch(pathToFetch)
    .then(res => {
        console.log(res.ok);
        console.log(res.status);
        return res.json()
    })
    .then(json => console.log(json.text))
    .catch(err => console.log("problem ze znalezieniem sciezki", err));