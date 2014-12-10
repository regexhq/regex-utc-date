'use strict';

/**
 * Expose UTC regex.
 *
 * Example input:
 *   Sun, 07 Dec 2014 09:44:50 GMT
 */

module.exports = function() {
  return /\w{3}, \d{2} \w{3} \d{4} \d{2}:\d{2}:\d{2} GMT/;
};
