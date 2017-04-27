'use strict';

const bootstrap = require('hof-bootstrap');

const settings = require('./hof.settings');

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.start = false;

module.exports = bootstrap(settings);
