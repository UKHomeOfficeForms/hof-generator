'use strict';

const path = require('path');
const defaults = require('./defaults');
const chain = require('../../utils/chain');

const tasks = [
  'check-empty',
  'copy-files',
  'npm-init',
  'install-dependencies'
];

function init(dir, options) {
  dir = dir || '.';
  dir = path.resolve(process.cwd(), dir);

  const settings = Object.assign({}, defaults, options, {
    dir,
    dirname: path.basename(dir)
  });

  const root = path.resolve(__dirname, '../../../lib/tasks');

  return chain(tasks, root, settings)
    .then(() => {
      console.log('Done!');
      console.log('Open the behaviour in an editor to customise');
    });
}

module.exports = init;
