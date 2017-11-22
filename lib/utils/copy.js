'use strict';

const Promise = require('bluebird');

const glob = Promise.promisify(require('glob'));
const mkdirp = Promise.promisify(require('mkdirp'));
const path = require('path');
const fs = require('fs');
const mu = require('mu2');

function compile(src, dest, settings) {
  settings = settings || {};
  return mkdirp(path.dirname(dest))
    .then(() => {
      // read the file mode of the source file
      return new Promise((resolve, reject) => {
        fs.stat(src, (err, stat) => {
          return err ? reject(err) : resolve(stat.mode);
        });
      });
    })
    .then(mode => {
      return new Promise((resolve, reject) => {
        let stream;
        if (path.basename(src).match(/\.tpl(\.|$)/)) {
          dest = dest.replace('.tpl', '');
          stream = mu.compileAndRender(src, settings);
        } else {
          stream = fs.createReadStream(src);
        }
        stream.pipe(fs.createWriteStream(dest, { mode }));
        stream.on('end', resolve);
        stream.on('error', reject);
      });
    });
}

function copy(src, dest, settings) {
  const pattern = path.resolve(src, '**/*');
  return glob(pattern, { nodir: true, dot: true })
    .then((files) => {
      return Promise.map(files, (file) => {
        const target = path.resolve(dest, path.relative(src, file));
        return compile(file, target, settings);
      }, {concurrency: 1});
    });
}

module.exports = copy;
