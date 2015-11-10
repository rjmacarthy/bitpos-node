var bitpos = require('../index');
var superagent = require('superagent');

describe('bitpos instantiation', function() {

    it('should throw an error without a username and password', function() {
        expect(function() {
            new bitpos();
        }).toThrow();
    });

    it('should be able to instantiate with username and password', function() {
        var bp = new bitpos({
            username: 'username',
            password: 'password'
        });
        expect(bp).toBeDefined();
        expect(bp.username).toBe('username');
        expect(bp.password).toBe('password');
    });

});

xdescribe('bitpos create', function() {
    it('should be able to create an order', function(done) {
        var bp = new bitpos({
            username: 'username',
            password: 'password'
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
            expect(response).toBeDefined();
            expect(response.bitcoinAddress).toBeDefined();
            done();
        });
    });

});

xdescribe('bitpos status', function(done) {
	it('should be able to get an order status', function(){
		 var bp = new bitpos({
	        username: 'username',
	        password: 'password'
	    });
	    bp.status('encodedOrderId', function(err, response) {
	        expect(response).toBeDefined();
	        expect(response.bitcoinAddress).toBeDefined();
	        done();
	    });
	});
});
