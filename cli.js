#!/usr/bin/env node
'use strict';
var meow = require('meow');
var blns = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ blns [input]',
		'',
		'Examples',
		'  $ blns',
		'  unicorns & rainbows',
		'',
		'  $ blns ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(blns(cli.input[0] || 'unicorns'));
