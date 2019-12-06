const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer(); 
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "My secret key",
                 resave: true,
                 saveUninitialized: true}));

var AccessController = require('./controllers/accessController.js')
 
app.post('/signup',(req, res) => {
    AccessController.signup(req, res);
});
app.post('/signin',(req, res) => {
    AccessController.signin(req, res);
});
app.get('/logout',(req, res) => {
    AccessController.logout(req, res);
});


app.listen(3001);
