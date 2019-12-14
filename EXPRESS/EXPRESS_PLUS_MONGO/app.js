const mongo = require('mongodb');

const client = new mongo.MongoClient('mongodb://localhost:27017', {useNewUrlParser: true});

client.connect(err =>{
    if(err){
        console.log("błąd połączenia", err);
    }
    else{
        console.log("połączenie udane!");

        const db = client.db('test');

        const cars = db.collection('cars');

        cars.find({}).toArray((err,carList)=>{
            if(err){
                console.log("bledne zapytanie");
            }
            else{
                console.log("samochody: ", carList);
            }
        });

        // cars.updateOne({model: "passat"}, {$set: {
        //     model: "Arteon"
        // }})


        client.close();

    }
});