const request = require('request');
const fs = require('fs');

// `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`

const validCodes = ['usd', 'eur', 'gbp', 'chf'];

const code = process.argv[2];

const url = `http://api.nbp.pl/api/exchangerates/rates/a/${code}/?format=json`;

let isValid = false;

// validCodes.forEach(valid => {
//     if(valid == code){
//         return isValid = true;
//     }
// })

isValid = validCodes.find(valid => valid === code) ? true: false;

if(!isValid){
    console.log("zly kod!")
    process.exit();
}

request(url, {json:true}, (error,response,body)=>{
    const message = `Średnia cena ${body.currency} w dniu: ${body.rates[0].effectiveDate} wynosi: ${body.rates[0].mid} złotych`;
    if(error) {
        return console.log("blad!: ", error);
    }
    if(response.statusCode!==200){
        return console.log("błąd połączenia, sprawdz url", response.statusCode);
    }
    console.log(message);
    fs.appendFile('./backup.txt',`\n${message}`,(err)=>{
        if(err) throw err;
        console.log("plik backup.txt został zaktualizowany");
    });
});

