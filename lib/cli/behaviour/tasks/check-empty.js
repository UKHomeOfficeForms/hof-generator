'use strict';

const Promise = require('bluebird');
const readdir = Promise.promisify(require('fs').readdir);
const some = require('lodash.some');

const allowed = [
  /^\./,
  /^README\.md$/i,
  /^node_modules$/,
  /^LICENCE(\.md)?$/i
];

module.exports = function exists(settings) {
  return readdir(settings.dir)
    .then((contents) => {
      const good = contents.reduce((b, file) => {
        return b && some(allowed, re => file.match(re));
      }, true);
      if (!good && !settings.force) {
        throw new Error(`Cannot initialise hof in non-empty directory.
Use '--force' flag to force overwrite existing contents`);
      }
    });
};
