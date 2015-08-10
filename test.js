'use strict';
var assert = require('assert');
var blns = require('./');

it('should get a JSON object', function (done) {
	blns(function(err,data){
		assert.equal(Object.keys(JSON.parse(data)).length > 0, true);
		done();
	})
});
