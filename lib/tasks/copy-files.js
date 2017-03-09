'use strict';

const path = require('path');
const cp = require('../utils/copy');

module.exports = function copy(settings) {
  return cp(path.resolve(settings.root, 'template'), settings.dir, settings);
};
