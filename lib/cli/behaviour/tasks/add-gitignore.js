'use strict';

const path = require('path');
const append = require('../../../utils/append');

const ignore = [];

module.exports = function gitignore(settings) {
  return append(path.resolve(settings.dir, '.gitignore'), ignore.join('\n') + '\n');
};
