'use strict';

const controllers = require('hof-controllers');

module.exports = {
  name: '{{name}}',
  baseUrl: '/{{name}}',
  steps: {
    '/': {
      controller: controllers.start,
      next: '/step-one'
    },
    '/step-one': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      controller: controllers.confirm,
      next: '/complete'
    },
    '/complete': {}
  }
};
