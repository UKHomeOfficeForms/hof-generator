'use strict';

const installer = require('./install-dependencies');

module.exports = function install(settings) {
  return installer(settings, ['--save', `hof-theme-${settings.theme}`]);
};
