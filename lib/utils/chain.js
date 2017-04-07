'use strict';

const Promise = require('bluebird');
const path = require('path');
const ora = require('ora');

function chain(tasks, root, settings) {
  return tasks.reduce((p, task) => {
    return p
      .then(() => {
        settings.spinner = ora(`Executing task: ${task}`).start();
        const fn = require(path.resolve(root, task));
        return fn(settings)
          .then(() => {
            settings.spinner.succeed();
          }, e => {
            settings.spinner.fail();
            throw e;
          });
      });
  }, Promise.resolve());
}

module.exports = chain;
