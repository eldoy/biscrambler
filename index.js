var DEFAULT_MAP = [
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

module.exports = function (opt = {}) {
  var map = opt.map || DEFAULT_MAP

  function scramble(date) {
    date = date.split('').reverse()

    var result = []
    for (var n of date) {
      var item = map.find((x) => x[0] == n)
      result.push(item[1])
    }
    return result.join('')
  }

  function unscramble(date) {
    var result = []
    for (var n of date.split('')) {
      var item = map.find((x) => x[1] == n)
      result.push(item[0])
    }
    return result.reverse().join('')
  }

  return { scramble, unscramble }
}
