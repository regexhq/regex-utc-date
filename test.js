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

  it('should expose match groups:', function() {
    var match = regex().exec('Sun, 07 Dec 2014 09:44:50 GMT');
    assert.equal(match[0], 'Sun, 07 Dec 2014 09:44:50 GMT');
    assert.equal(match[1], 'Sun');
    assert.equal(match[2], '07');
    assert.equal(match[3], 'Dec');
    assert.equal(match[4], '2014');
    assert.equal(match[5], '09:44:50');
    assert.equal(match[6], '09');
    assert.equal(match[7], '44');
    assert.equal(match[8], '50');
  });

  it('should catch incorrect input', function() {
    assert.equal(regex().test('Sun, 07 De 2014 09:44:50 GMT'), false);
    assert.equal(regex().test('Sun 07 De 2014 09:44:50 GMT'), false);
  });
});
