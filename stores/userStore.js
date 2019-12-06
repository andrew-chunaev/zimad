const url = 'mongodb://127.0.0.1:27017';
const tableName = 'user';
const dbName = 'zimad';
var MongoClient = require('mongodb').MongoClient;

exports.create = user => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db(dbName);
        db.collection(tableName).insertOne(user, {w:1}, (err, doc) => {
            //console.log("ERROR: ", err);
        });
        client.close();
    });
}

exports.checkById = (id, callback) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db(dbName);
        db.collection(tableName).countDocuments({"id":id}, {limit:1}, (err, doc) => {
             callback(doc);
        });
        client.close();
    });
}

exports.findByIdAndPassword = (id, password, callback) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db(dbName);
        db.collection(tableName).find({"id":id, "password": password}, {limit:1}, (err, doc) => {
             callback(doc);
        });
        client.close();
    });
}
