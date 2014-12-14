# regex-utc-date
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Regular expression for UTC date.

## Installation

```bash
npm install regex-utc-date
```

## Usage

```js
var regex = require('regex-utc-date');

regex().test('Sun, 07 Dec 2014 09:44:50 GMT');
// => true

var match = regex().exec('Sun, 07 Dec 2014 09:44:50 GMT');
match[0] // => 'Sun, 07 Dec 2014 09:44:50 GMT'
match[1] // => 'Sun'
match[2] // => '07'
match[3] // => 'Dec'
match[4] // => '2014'
match[5] // => '09:44:50'
match[6] // => '09'
match[7] // => '44'
match[8] // => '50'
```

## Contributors
- [Yoshua Wuyts](https://github.com/yoshuawuyts)
- [Hugh Kennedy](https://github.com/hughsk)
- [Jon Schlinkert](https://github.com/jonschlinkert)

## See Also
- [Date.prototype.toUTCString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)
-- [regex-iso-date](https://github.com/regexps/regex-iso-date)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/regex-utc-date.svg?style=flat-square
[npm-url]: https://npmjs.org/package/regex-utc-date
[travis-image]: https://img.shields.io/travis/yoshuawuyts/regex-utc-date.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/regex-utc-date
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/regex-utc-date.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/regex-utc-date?branch=master
[downloads-image]: http://img.shields.io/npm/dm/regex-utc-date.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/regex-utc-date
