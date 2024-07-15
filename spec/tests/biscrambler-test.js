var biscrambler = require('../../index.js')()

it('should scramble a date', async ({ t }) => {
  var date = '090580'
  var result = biscrambler.scramble(date)

  t.equal(result, '651676')
})

it('should unscramble a date', async ({ t }) => {
  var date = '651676'
  var result = biscrambler.unscramble(date)

  t.equal(result, '090580')
})
