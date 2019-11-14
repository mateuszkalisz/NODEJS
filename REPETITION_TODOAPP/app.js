const argv = require('minimist')(process.argv.slice(2));
const colors = require('colors');
const fs = require('fs');
delete argv._;

console.log(argv);

const handleData = (type, name) =>{
    const data = fs.readFileSync('data.json');
    
    let tasks = JSON.parse(data);

    if(type == 1 || type==2){
        const isExisted = tasks.find(task => task.name == name) ? true : false;
        if(type == 1 && isExisted){
            return console.log("nie mozna dodac osoby ktore juz istnieje");
        }
        else if(type == 2 && !isExisted){
            return console.log("nie mozna usunac osoby ktora nie istnieje");
        }
    }

    switch(type){
        case 1:
            console.log("dodaje...");
            tasks.push({
                id: tasks.length + 1,
                name: name
            })

            const tasksToString = JSON.stringify(tasks);
            fs.writeFile('data.json', tasksToString, (err)=>{
                if(err) console.log(err);
                console.log(`Imię ${name} zostalo dodane do listy`);
            });
            // console.log(tasks);
            break;
        case 2:
            console.log("usuwam...");
            const removeIndex = tasks.findIndex(task => task.name == name);
            console.log(removeIndex);
            tasks.splice(removeIndex, 1);

            tasks.map((task,index)=>{
                task.id = index +1,
                tasks.name
            })
            const tasksToString2 = JSON.stringify(tasks);
            fs.writeFile('data.json', tasksToString2, (err)=>{
                if(err) console.log(err);
                console.log(`Imię ${name} zostalo usuniete do listy`);
            });

            break;
        case 3:
            console.log("pokazuje liste...");
            tasks.map((task,index) => {
                if(index%2==0) console.log((index+1+") "+task.name).green);
                if(index%2!=0) console.log((index+1+") "+task.name).blue);
            });
        }
}

const handleCommand = ({add,remove,list}) =>{
    
    if(add){
        if(typeof add!="string" || add.length<2){
            return console.log("wpisz nazwe zadania lub jego dlugosc jest za krotka".red);
        }
        handleData(1, add);
    }

    else if(remove){
        if(typeof remove!="string" || remove.length<2){
            console.log("wpisz nazwe zadania lub jego dlugosc jest za krotka".red);  
        }
        handleData(2, remove);
    }
    else if(list){
        if(list || list ==""){
        handleData(3, null);
        }
    }
    else{
        console.log("nie znam takiego polecenia".red);
    }
}



handleCommand(argv);