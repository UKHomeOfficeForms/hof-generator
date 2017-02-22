'use strict';

const crypto = require('crypto');

module.exports = {
  dir: process.cwd(),
  force: false,
  name: 'default-behaviour',
  secret: crypto.randomBytes(64).toString('hex')
};
