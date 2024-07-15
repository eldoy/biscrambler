# Biscramble

Bi-directional string and number scrambler

### Install

```
npm i biscrambler
```

### Usage

```js
var map = [
  [0, 6],
  [1, 8],
  [2, 3],
  [3, 0],
  [4, 9],
  [5, 1],
  [6, 2],
  [7, 4],
  [8, 5],
  [9, 7]
]

var biscrambler = require('biscrambler')({ map })

biscrambler.scramble('090580')    // 651676
biscrambler.unscramble('651676')  // 090580
```

MIT Licensed. Enjoy!

Created by [Eldøy Projects](https://eldoy.com)
