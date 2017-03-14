'use strict';

const cp = require('child_process');

module.exports = function install(settings) {
  return new Promise((resolve, reject) => {
    const opts = {
      stdio: settings.verbose ? 'inherit' : 'ignore'
    };
    cp.spawn('npm', ['install'], opts)
      .on('exit', (code) => {
        if (code) {
          reject(new Error('npm install failed'));
        } else {
          resolve();
        }
      });
  });
};
