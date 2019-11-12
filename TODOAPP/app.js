// console.log(process.argv.slice(2,3));
const colors = require('colors');
const parseArgs = require('minimist');

const command = parseArgs(process.argv.slice(2,3));

delete command._;


const handleCommand = ({list, add, remove}) =>{

if(add){
    if(typeof add !=="string"){
        return console.log("wpisz nazwę dodawanego zadania! (TEKST!!!)".red);    
    }
    else if(add.length <7){
        return console.log("nazwa zadania musi miec wiecej niz 6 znakow!".red);
    }
    handleData();
    console.log("będę dodawać coś...");
}
else if(remove){
    if(typeof remove!=="string" || remove.length<7){
        return console.log("wpisz nazwe usuwanego zadania i tekst musi miec wiecej niz 6 znaków!");
    }
    console.log("będę usuwać...");
    handleData();
}
else if(list || list === ""){
    console.log("pokazuję liste");
    handleData();
}
else{
    console.log("nie rozumiem polecenia");
}}

const handleData = () =>{

}

handleCommand(command);
