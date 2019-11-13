const fs = require('fs');
const colors = require('colors');


const handleData = (type, title) =>{
    const data = fs.readFileSync('db.json');
    // const data = fs.readFileSync('db.json', 'utf8');
    // const data = fs.readFileSync('db.json').toString();

    let tasks = JSON.parse(data)
    // console.log(tasks);

    if(type==1 ||type==2){
        const isExisted = tasks.find(task => task.title === title) ? true : false;
        if(type ==1 && isExisted){
            return console.log("takie zadanie juz istnieje!".red);
        }
        else if(type ==2 && !isExisted){
            return console.log("nie mogę usunąć zadania ktore nie istnieje!".yellow);
        }
    }

    switch(type){
        case 1: 
        console.log("dodaje zadanie...");
        
        const id = tasks.length+1;
        tasks.push({id, title});
        const json = JSON.stringify(tasks);
        fs.writeFile('db.json', json, (err) =>{
            if(err) console.log("błąd: ", err);
            console.log(`ZADANIE ${title} DODANE!`.green);
        } )
        break;
        case 2:
        console.log("usuwam zadanie...");
        const index = tasks.findIndex(task => task.title === title);
        tasks.splice(index, 1);
        // console.log("TABLICA", tasks);
        tasks.map((task,index)=>{
         task.title;
         task.id = index+1;   
        })
        const jsonR = JSON.stringify(tasks);
        fs.writeFile('db.json', jsonR, (err) =>{
            if(err) console.log("błąd: ", err);
            console.log(`ZADANIE ${title} USUNIETE!`.red);
        })
        break;
        case 3:
        console.log("pokazuje listę...".yellow);
        const lists = tasks.map((task, index) => {
            if(index%2==0) console.log((index+1 + ") " + task.title).cyan);
            if(index%2!=0) console.log((index+1 + ") " + task.title).blue);
        });
        break;
    }
}

module.exports = handleData;