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

exports.checkById = (id, callback) => {
    MongoClient.connect(url, (err, client) => {
        var db = client.db('zimad');
        db.collection(tableName).count({"id":id}, {limit:1}, (err, doc) => {
            console.log("checked doc: ", doc);
        });
        client.close();
    });
    return false;
}
