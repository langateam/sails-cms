var sails = require('sails');
require('babel/register');

sails.lift({
  log: {
    level: 'silly'
  },
  hooks: {
    grunt: false,
    cms: false
  }
})
