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

//--------READFILE

// fs.readFile('./imiona.txt', 'utf8', (err, data) =>{
//     if(err) throw Error(err);
//     else console.log("zawartosc pliku:", data.toString());
// })

// let names;
// try{
//     names = fs.readFile('./imiona.txt', 'utf8')
// }
// catch (err){
//     names = false;
// }

// console.log(names);

//-----WRITEFILE

const txt = '\n append';

// fs.readFile('./nowyplik.txt', 'utf8', (err,file)=>{
//     if(err) console.log('blad: ', err);
//     else console.log('zawartosc pliku: ', file);
// })

// fs.readFile('./nowyplik.txt','utf8', (err,data)=>{
// if(err) return console.log("nie udalo sie");
// else{
//     fs.writeFile('./nowyplik2.txt', data, (error) => {
//     if(error) console.log(error);
//     else console.log('udalo sie nadpisac plik');
// })}})

fs.appendFile('./nowyplik2.txt', txt, (err)=>{
    if(err) console.log("nie udalo sie dopisac");
    else console.log("operacja powiodla sie");
})