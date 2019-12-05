const url = 'mongodb://127.0.0.1:27017';
const tableName = 'user';
var MongoClient = require('mongodb').MongoClient;

exports.create = user => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db('zimad');
        db.collection(tableName).insertOne(user, {w:1}, (err, doc) => {
            //console.log("ERROR: ", err);
        });
        client.close();
    });
}
