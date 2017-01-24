'use strict';

const Promise = require('bluebird');
const path = require('path');
const write = Promise.promisify(require('fs').writeFile);

module.exports = function addRoute(options) {
  const file = path.resolve(options.dir, './hof.settings.json');
  const settings = require(file);
  if (settings.routes.indexOf(`./apps/${options.name}`) === -1) {
    settings.routes.push(`./apps/${options.name}`);
  }

  return write(file, JSON.stringify(settings, null, '  '));
};
