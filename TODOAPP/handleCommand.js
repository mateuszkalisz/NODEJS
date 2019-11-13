const handleData = require('./handleData');

const handleCommand = ({list, add, remove}) =>{

    if(add){
        if(typeof add !=="string"){
            return console.log("wpisz nazwę dodawanego zadania! (TEKST!!!)".red);    
        }
        else if(add.length <7){
            return console.log("nazwa zadania musi miec wiecej niz 6 znakow!".red);
        }
        handleData(1, add);
        // console.log("będę dodawać coś...");
    }
    else if(remove){
        if(typeof remove!=="string" || remove.length<7){
            return console.log("wpisz nazwe usuwanego zadania i tekst musi miec wiecej niz 6 znaków!");
        }
        // console.log("będę usuwać...");
        handleData(2, remove);
    }
    else if(list || list === ""){
        // console.log("pokazuję liste");
        handleData(3, null);
    }
    else{
        console.log("nie rozumiem polecenia");
    }}

module.exports = handleCommand;