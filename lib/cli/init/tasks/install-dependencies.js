'use strict';

const cp = require('child_process');

module.exports = function install(settings, args) {
  args = args || [];
  return new Promise((resolve, reject) => {
    const opts = {
      stdio: settings.verbose ? 'inherit' : 'ignore'
    };
    cp.spawn('npm', ['install'].concat(args), opts)
      .on('exit', (code) => {
        if (code) {
          reject(new Error('`npm install` failed. Run with `--verbose` flag to see npm log output'));
        } else {
          resolve();
        }
      });
    if (settings.verbose) {
      settings.spinner.stopAndPersist();
    }
  });
};
