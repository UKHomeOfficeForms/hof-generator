'use strict';

const crypto = require('crypto');

module.exports = {
  force: false,
  app: 'default-app',
  secret: crypto.randomBytes(64).toString('hex')
};
