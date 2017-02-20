'use strict';

module.exports = {
  name: '{{name}}',
  baseUrl: '/{{name}}',
  steps: {
    '/name': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {}
  }
};
