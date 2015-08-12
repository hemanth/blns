'use strict';

module.exports = function (cb) {
	if (typeof cb !== 'function') throw new Error("Missing callback");
  cb(null, require('./resources/blns.json'));
};
