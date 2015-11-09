var bitpos = require('./bitpos');

var bp = new bitpos({
 	username : '',
    password : ''
});

var order = {
    "currency": "AUD",
    "amount": 100,
    "reference": "reference",
    "description": "description",
    "successURL": "http://www.localhost.com/success",
    "failureURL": "http://www.localhost.com/fail",
}

bp.create(order, function(err, response) {
    console.log(err, response);
});

bp.status('K3FRMHZSNzVuVzlORjNESlhNSG0xOGdRendhTk5kQXJrc0JSTkZuOU4vMnF1NTMzQ1MycjNkL3BJaVRhZWtaTQ', function(err, response) {
    console.log(err, response);
});
