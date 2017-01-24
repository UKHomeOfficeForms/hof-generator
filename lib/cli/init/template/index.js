'use strict';

const bootstrap = require('hof-bootstrap');

const settings = require('./hof.settings.json');

settings.routes = settings.routes.map(route => require(route));
settings.start = false;

module.exports = bootstrap(settings);
