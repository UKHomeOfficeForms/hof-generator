'use strict';

const controllers = require('hof-controllers');

module.exports = {
  name: '{{name}}',
  baseUrl: '/{{name}}',
  steps: {
    '/': {
      controller: controllers.start,
      next: '/name'
    },
    '/name': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      controller: require('hof-confirm-controller'),
      next: '/complete'
    },
    '/complete': {}
  }
};
