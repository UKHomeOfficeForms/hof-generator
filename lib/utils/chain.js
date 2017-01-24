'use strict';

const Promise = require('bluebird');
const path = require('path');

function chain(tasks, root, settings) {
  return tasks.reduce((p, task) => {
    return p
      .then(() => {
        console.log(`Executing task: ${task}`);
        const fn = require(path.resolve(root, task));
        return fn(settings);
      });
  }, Promise.resolve());
}

module.exports = chain;
