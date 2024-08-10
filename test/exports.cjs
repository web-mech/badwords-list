const assert = require('better-assert')

describe('filter', function () {
  it('Should contain property object', async function () {
    const { object } = await import('../dist/index.js')
    assert(object && Object.keys(object).length > 0)
  })

  it('Should contain property array', async function () {
    const { array } = await import('../dist/index.js')
    assert(array && array.length > 0)
  })

  it('Should contain property regex', async function () {
    const { regexp } = await import('../dist/index.js')
    assert(regexp && regexp instanceof RegExp)
  })
})
