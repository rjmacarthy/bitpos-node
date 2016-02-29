process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var request = require('superagent');
var constants = require('./constants');

var Bitpos = function(config) {
    if (config && (config.username && config.password)) {
        this.username = config.username;
        this.password = config.password;
        this.baseUrl = config.live ? constants.base : constants.test;
    } else {
        throw new Error('Failed to instantiate, username and password needed');
    }
};

Bitpos.prototype.HandleError = function(err, callback) {
    return callback(err, null);
}

Bitpos.prototype.create = function(order, callback) {
    var self = this;
    var orderUrl = this.baseUrl + constants.create;
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
                            return self.HandleError(err, callback);
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
    statusUrl = self.baseUrl + constants.order + id
    request.get(statusUrl)
        .auth(self.username, self.password)
        .end(function(err, response) {
            if (err) {
                return self.HandleError(err, callback);
            } else {
                callback(null, response.body);
            }
        });
};

module.exports = Bitpos;
