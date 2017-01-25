'use strict';

const defaults = require('./defaults');
const path = require('path');
const chain = require('../../utils/chain');

const tasks = [
  'check-exists',
  'copy-files',
  'add-route'
];

function init(name, opts) {
  const settings = Object.assign({}, defaults, opts, {name});
  return chain(tasks, path.resolve(__dirname, './tasks'), settings);
}

module.exports = init;
