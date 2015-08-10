'use strict';
var URL = 'https://raw.githubusercontent.com/minimaxir/big-list-of-naughty-strings/master/blns.json'
var got = require('got');
module.exports = function (cb) {
	if (typeof cb !== 'function') throw new Error("Missing callback");
	got(URL,cb)
};
