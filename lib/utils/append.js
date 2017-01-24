'use strict';

const Promise = require('bluebird');
const appendFile = Promise.promisify(require('fs').appendFile);

module.exports = function append(file, content) {
  return appendFile(file, content);
};

