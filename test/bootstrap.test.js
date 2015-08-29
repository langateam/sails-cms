var path = require('path');
var assert = require('assert');
var Sails = require('sails');

var config = {
  log: { level: 'error' },
  models: { migrate: 'alter' },
  hooks: { grunt: false }
};

before(function(done) {
  this.timeout(120 * 1000);

  Sails.lift(config, function(err, sails) {
    global.sails = sails;

    done(err);
  });
});

describe('sails', function () {
  it('should exist', function () {
    assert(global.sails);
  });
});

after(function(done) {
  if (global.sails) {
    global.sails.lower(function (err) {
      console.log();
      done(err);
    });
  }
});
