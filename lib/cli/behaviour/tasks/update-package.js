'use strict';

const Promise = require('bluebird');
const path = require('path');
const readFile = Promise.promisify(require('fs').readFile);
const writeFile = Promise.promisify(require('fs').writeFile);

module.exports = function updatePackage(settings) {
  const filePath = path.resolve(settings.dir, 'package.json');
  return readFile(filePath, 'utf8')
    .then((contents) => {
      return JSON.parse(contents);
    })
    .then((json) => {
      json.name = settings.name;
      return writeFile(filePath, JSON.stringify(json, null, 2));
    })
    .catch(() => {
      throw new Error(`Cannot update contents at ${settings.dir}/package.json`);
    });
};
