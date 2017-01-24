'use strict';

const cp = require('child_process');

module.exports = function install() {
  return new Promise((resolve, reject) => {
    cp.spawn('npm', ['install'])
      .on('exit', (code) => {
        if (code) {
          reject(new Error('npm install failed'));
        } else {
          resolve();
        }
      });
  });
};
