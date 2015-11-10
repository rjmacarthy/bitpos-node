process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var request = require('superagent');
var constants = require('./constants');

var Bitpos = function(config) {
    if (config) {
        this.username = config.username;
        this.password = config.password;
    } else {
        throw new Error('Failed to instantiate, username and password needed');
    }
};

Bitpos.prototype.HandleError = function(err, callback) {
    return callback(err, null);
}

Bitpos.prototype.create = function(order, callback) {
    var self = this;
    var orderUrl = constants.base + constants.create;
    if (this.username && this.password) {
        try {
            request.post(orderUrl)
                .set('Content-Type', 'application/json')
                .auth(this.username, this.password)
                .send(order)
                .end(function(err, response) {
                    if (err) {
                        return self.HandleError(err, callback);
                    } else {
                        if (response && response.body && response.status === 200) {
                            callback(null, response.body);
                        } else {
                            return this.HandleError(err, callback);
                        }
                    }
                });
        } catch (err) {
            return self.HandleError(err, callback);
        }
    } else {
        return self.HandleError({
            error: 'Must provide username and password'
        });
    }
};

Bitpos.prototype.status = function(id, callback) {
    var self = this;
    statusUrl = constants.base + constants.order + id
    request.get(statusUrl)
        .auth(this.username, this.password)
        .end(function(err, res) {
            if (err) {
                return self.HandleError(err, callback);
            } else {
                callback(null, response.body);
            }
        });
};

module.exports = Bitpos;
