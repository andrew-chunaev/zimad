var UserStore = require('../stores/userStore.js');

exports.signin = (req, res) => {
    if(!req.body.id || !req.body.password){
        res.status(400);
        res.send("Invalid details!");
    } else {
        /*UserStore.checkById(req.body.id, result => {
          if (result[0].exists) {
          response.status(400);
          response.send("User Already Exists! Login or choose another user id");
          } else {*/
        UserStore.create(req.body); /*, id => {
                                      request.session.userId = id;*/
        res.status(201);
        res.send('');
        /*  });
            }
            });               */
    }    
}
