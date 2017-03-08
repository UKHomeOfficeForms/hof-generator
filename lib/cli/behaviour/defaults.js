'use strict';

const path = require('path');

module.exports = {
  dir: process.cwd(),
  force: false,
  name: path.basename(process.cwd()),
  root: __dirname
};
