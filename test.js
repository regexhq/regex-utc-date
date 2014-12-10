/**
 * Module dependencies
 */

var assert = require('assert');
var regex = require('./index');

/**
 * Test
 */

describe('utc regex', function() {
  it('should match utc input', function() {
    assert.equal(regex().test('Sun, 07 Dec 2014 09:44:50 GMT'), true);
  });

  it('should catch incorrect input', function() {
    assert.equal(regex().test('Sun, 07 De 2014 09:44:50 GMT'), false);
    assert.equal(regex().test('Sun 07 De 2014 09:44:50 GMT'), false);
  });
});
