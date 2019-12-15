const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

function addNewToDo(toDosCollection, title){
    toDosCollection.insertOne({
        title,
        done: false,
}, err =>{
    if(err) console.log("blad podczas dodawania");
    else console.log("zadanie dodane");
})
    client.close();
}

function showAll(toDosCollection){
    toDosCollection.find({}).toArray((err, toDos) =>{
        if(err) console.log("błąd podczas wyświetlania listy");
        // else console.log(toDos)
        else{
            const todosToDo = toDos.filter(todo => !todo.done);
            const todosDone = toDos.filter(todo => todo.done);

            // console.log(todosDone);

            console.log("#lista zadan do zrobienia: ", `(${todosToDo.length})`);
            for(const todo of todosToDo){
                console.log(`${todo.title}`);
            }


            console.log("#lista zadan zrobionych (zakonczonych): ", `(${todosDone.length})`);
            for(const done of todosDone){
                console.log(`${done.title}`)
            }
        }
    })

    client.close();
}

function doTheToDo(toDosCollection){

    const [command, ...args] = process.argv.splice(2);

    switch(command){
        case 'add': 
        addNewToDo(toDosCollection, args[0]);
        break;
        case 'list':
        showAll(toDosCollection);
        break;
    }

}

client.connect(err =>{
    if(err){
        console.log("brak połączenia!", error);
    }
    else{
        console.log("udało się połączyć z bazą mongodb..");

        const db = client.db('test');
        const toDosCollection = db.collection('todos');

        //
        doTheToDo(toDosCollection);
    }
})