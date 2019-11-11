//ZADANIE 1

// http://numbersapi.com/random/year?json

const fetch = require('node-fetch');

// const year = process.argv[2] || Math.floor(Math.random()*2020);


// const pathToFetch = `http://numbersapi.com/${year}/year?json`


// fetch(pathToFetch)
//     .then(res => {
//         console.log(res.ok);
//         console.log(res.status);
//         return res.json()
//     })
//     .then(json => console.log(json.text))
//     .catch(err => console.log("problem ze znalezieniem sciezki", err));


//ZADANIE 2

//http://numbersapi.com/number/type?json

const arg = process.argv[2]
let type = '';

if(arg.indexOf('--year') === 0){
    type = 'year';
    console.log("szukamy roku...");
}
else if(arg.indexOf('--math') ===0){
    type = 'math';
    console.log("szukamy inf o liczbie");
}
else if(arg.indexOf('--trivia') ===0){
    type = 'trivia';
    console.log("szukamy ciekawostki-liczby");
}

const equalSign = arg.search('=');
// console.log(equalSign);

if(equalSign == -1){
    console.log("nie wpisales liczby!")
}

const number = arg.slice(equalSign+1);

// if(number == "" || isNaN(Number(number))) {
//     console.log("To nie jest liczba, podaj poprawną wartość!");
//     process.exit();
// }

fetch(`http://numbersapi.com/${number}/${type}?json`)
.then(res => {
    if(res.ok) return res.json();
    else{
        throw new Error("cos poszlo nie tak: ", res.status);
    }
})
.then(json => console.log(json.text))
.catch(error => console.log(error));