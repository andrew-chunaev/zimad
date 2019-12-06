var UserStore = require('../stores/userStore.js');
var BearerToken = require('../security/bearerToken.js');

exports.signup = (req, res) => {
    if(!req.body.id || !req.body.password){
        res.status(400);
        res.send("Invalid details!");
    } else {
        var response = res;
        var request = req;
        UserStore.checkById(req.body.id, (count) => {
            if (count != 0) { 
                response.status(400);
                response.send("User Already Exists! Login or choose another user id");
            } else {
                UserStore.create(request.body);
                var token = BearerToken.generate({id: request.body.id});
                request.session.token = token;        
                response.status(201);
                response.send('');
            }
        });
    }    
}

exports.signin = (req, res) => {
    if(!req.body.id || !req.body.password){
        res.status(400);
        res.send("Please enter both id and password");
    } else {
        var request = req;
        var response = res;
        UserStore.findByIdAndPassword(req.body.id, req.body.password, result => {
            if (result.length == 0) {
                response.status(401);
                response.send("Invalid credentials!");
            } else {
                var token = BearerToken.generate({id: request.body.id});
                request.session.token = token;        
                response.status(200);
                response.send('');
            }
        });               
    }
}

exports.logout = (req, res) => {
    req.session.destroy(() => {});
    res.status(200);    
    res.send('');
}
