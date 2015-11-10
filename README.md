
# bitpos-node

A Small Node.js Wrapper for Bitpos.me

Wesite: bitpos.me
API documentation : https://github.com/bitpos/api-doc

## Installation

  npm install bitpos-node --save

## Usage


**Require bitpos-node**

```
  var bitpos = require('bitpos-node');
```

**Instantiate**

```
	var bp = new bitpos({
		username : 'apiusername',
		password : 'apipassword'
	});
```

**Create an order**

```
	var order = {
        "currency": "AUD",
        "amount": 100,
        "reference": "reference",
        "description": "description",
        "successURL": "http://www.localhost.com/success",
        "failureURL": "http://www.localhost.com/fail",
    }
    bp.create(order, function(err, order) {
        //order returned;
    });
```

**Check order status**

```
	bp.status('encodedOrderId', function(err, status) {
		//status returned;
	});
```

## Tests

  npm test

## Contributing

Contact or fork.

Email : richardmacarthy@hotmail.com
Website : www.cryptogrind.com

## Release History

* 1.0.0 Initial release