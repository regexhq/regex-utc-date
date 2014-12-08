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

regex.test('Sun, 07 Dec 2014 09:44:50 GMT');
// => true
```

## Contributors
- [Yoshua Wuyts](https://github.com/yoshuawuyts)
- [Hugh Kennedy](https://github.com/hughsk)

## See Also
- [Date.prototype.toUTCString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)

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
