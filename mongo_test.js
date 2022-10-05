const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://juantre82:1234Rush@bank-juan.b7uw5ab.mongodb.net/?retryWrites=true&w=majority";
// connect to mongo
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err=> {
  console.log("Connected successfully to server");

    // database Name
    const dbName = 'fullstackBadBankDB';
    const db = client.db(dbName);

    // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@mit.edu';

    // insert into customer table
    var collection = db.collection('customers');
    var doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document insert');
    });

    var customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs) {
            console.log('Collection:',docs);

            // clean up
            client.close();            
    });    

});