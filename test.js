'use strict';
var assert = require('assert');
var blns = require('./');

blns(function(err,data){
  assert.equal(Object.keys(data).length > 0, true);
})
