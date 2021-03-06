'use strict';

const path = require('path');
const defaults = require('./defaults');
const chain = require('../../utils/chain');

const tasks = [
  'check-empty',
  'copy-files',
  'create-app',
  'add-gitignore',
  'npm-init',
  'install-theme',
  'install-dependencies'
];

function init(dir, options) {
  dir = dir || '.';
  dir = path.resolve(process.cwd(), dir);

  const settings = Object.assign({}, defaults, {
    dir,
    dirname: path.basename(dir),
    app: path.basename(dir)
  }, options);
  const root = path.resolve(__dirname, './tasks');
  return chain(tasks, root, settings)
    .then(() => {
      console.log('Done!');
      console.log('Run `npm start` or `docker-compose up` to start your hof service');
    });
}

module.exports = init;
