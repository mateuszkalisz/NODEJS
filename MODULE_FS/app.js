const fs = require('fs');

//------------ACCESS

//SPRAWDZANIE CZY ISTNIEJE
// fs.access('./names.txt', fs.constants.F_OK, (err)=>{
//     console.log(err ? "plik nie istnieje" : "plik istnieje");
// })


//SPRAWDZANIE CZY MOZNA ZAPISAC
// fs.access('./blocked.txt', fs.constants.W_OK, (err)=>{
//     console.log(err ? "plik nie do zapisu" : "plik mozna zapisac");
// })


//------------RENAME

//ASYNC
// fs.rename('./imiona.txt', './names.txt', (err)=>{
//     console.log(err ? "Nie mozna zmienic nazwy" : "Nazwa zmieniona");
// })

//SYNC
// try{
//     fs.renameSync('./names.txt', './imiona.txt');
//     console.log("nazwa zmieniona");
// }
// catch (err){
//     if(err) console.log("Nie mozna zmienic nazwy");
// }


//---------READDIR
//sluzy do tego zeby zobaczyc jaka jest zawartosc folderu

//SYNC
// console.log(fs.readdirSync('./'));

//ASYNC
// fs.readdir('./', (err, files)=>{
//     if(err) console.log("brak plikow", err);
//     else console.log("pliki ktore sa w srodku to:", files);
// })

