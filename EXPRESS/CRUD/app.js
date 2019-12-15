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
                console.log(`Zadanie: ${todo.title} ,o id: ${todo._id}`);
            }


            console.log("#lista zadan zrobionych (zakonczonych): ", `(${todosDone.length})`);
            for(const done of todosDone){
                console.log(`Zadanie: ${done.title} ,o id: ${done._id}`);
            }
        }
    })

    client.close();
}

function markTaskAsDone(toDosCollection, id){
    
    toDosCollection.find({
        _id: mongo.ObjectID(id),
    }).toArray((err, todos)=>{
        if(err) console.log("brak elementu w bazie o podanym id", err);
        else if(todos.length!==1) console.log("nie ma takiego zadania!", err);
        else if(todos[0].done) console.log("takie zadanie zostało skończone!");
        else {
            toDosCollection.updateOne({
                _id: mongo.ObjectID(id),
            },
            {
                $set: {
                    done: true,
                },
            }, err =>{
                if(err) console.log("blad podczas updatowania zadania", err);
                else console.log("update zadania zakonczony pomyslnie");
            }
            )

            client.close();
        }
    })

}

function deleteTask(toDosCollection, id){
    toDosCollection.find({
        _id: mongo.ObjectID(id),
    }).toArray((err, todos)=>{
        if(err) console.log("problem z usunieciem rekordu");
        else if(todos.length!==1) console.log("zadanie nie istnieje")
        else{
            toDosCollection.deleteOne({
                _id: mongo.ObjectID(id),
            }, err =>{
                if(err) console.log("cos poszlo nie tak");
                else console.log("zadanie usuniete");
            }
            )
        }
        client.close();
    })
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
        case 'done':
        markTaskAsDone(toDosCollection, args[0]);
        break;
        case 'delete':
        deleteTask(toDosCollection, args[0]);
        default:
            console.log("nie ma takiego polecenia, spróbuj ... add, list, done, delete");
            client.close();
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