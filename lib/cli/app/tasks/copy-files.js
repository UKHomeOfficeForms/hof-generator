'use strict';

const path = require('path');
const Promise = require('bluebird');
const cp = require('../../../utils/copy');
const mkdirp = Promise.promisify(require('mkdirp'));

module.exports = function copy(settings) {
  return mkdirp(path.resolve(settings.dir, `./apps/${settings.name}`))
    .then(() => {
      return cp(path.resolve(__dirname, '../template'), `./apps/${settings.name}`, settings);
    });
};
