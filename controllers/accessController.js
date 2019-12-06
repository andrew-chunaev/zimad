var UserStore = require('../stores/userStore.js');
var BearerToken = require('../security/bearerToken.js');

exports.signup = (req, res) => {
    if(!req.body.id || !req.body.password){
        res.status(400);
        res.send("Invalid details!");
    } else {
        if (!UserStore.checkById(req.body.id) {
            res.status(400);
            res.send("User Already Exists! Login or choose another user id");
        } else {
            UserStore.create(req.body);
            var token = BearerToken.generate({id: req.body.id});
            console.log("token: ", token);
            req.session.token = token;        
            res.status(201);
            res.send('');
        }
    }    
}

exports.signin = (req, res) => {
}
