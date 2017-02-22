'use strict';

const cp = require('child_process');

module.exports = function init() {
  return new Promise((resolve, reject) => {
    cp.spawn('npm', ['init', '-y'])
      .on('exit', (code) => {
        if (code) {
          reject(new Error('npm init failed'));
        } else {
          resolve();
        }
      });
  });
};
