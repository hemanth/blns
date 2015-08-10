# blns [![Build Status](https://travis-ci.org/hemanth/blns.svg?branch=master)](https://travis-ci.org/hemanth/blns)

> Up to date [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings)


## Install

```
$ npm install --save blns
```


## Usage

```js
var blns = require('blns');

blns(function(err,data){
	JSON.parse(data); // Will be an array of blns
	done();
});
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
