const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var AccessController = require('./controllers/accessController.js')
 
app.post('/signin',(req, res) => {
    AccessController.signin(req, res);
});
app.listen(3001);
