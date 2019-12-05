const jwt = require('jsonwebtoken');
var period = 10;
var key = 'secret';

exports.generate = data => {
    var token = jwt.sign(data, key);
    var expiryDate = new Date();
    expiryDate.setMinutes(expiryDate.getMinutes() + period);
    return {token: token, expiryDate: expiryDate};
}

exports.checkDate = token => {
    var now = new Date();
    return  now > token.expiryDate;
}

exports.extend = token => {
    var now = new Date();
    token.expiryDate.setMinutes(now.getMinutes() + period);
}

exports.decode = token => {
}
