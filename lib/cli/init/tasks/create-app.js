'use strict';

const app = require('../../app');

module.exports = function createApp(settings) {
  return app(settings.app, settings);
};
