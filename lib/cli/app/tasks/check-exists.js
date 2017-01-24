'use strict';

const Promise = require('bluebird');
const path = require('path');
const readdir = Promise.promisify(require('fs').readdir);

module.exports = function exists(settings) {
  return readdir(path.resolve(settings.dir, 'apps'))
    .catch(e => [])
    .then((contents) => {
      if (contents.indexOf(settings.name) > -1) {
        throw new Error(`Cannot create app ${settings.name} - already exists`);
      }
    });
};
