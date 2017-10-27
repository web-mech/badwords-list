var filter = require('leo-profanity');
var should = require('chai').should();

describe('leo-profanity filter', function () {
  it("should return '****** de *****' for 'bordel de merde' input", function () {
    var list = require('../dist/index');
    filter.clearList();
    filter.add(list.array);

    filter.clean('bordel de merde').should.be.equal('****** de *****');
  });

  it("should return true for 'bordel de merde' input", function () {
    var list = require('../dist/index');
    filter.clearList();
    filter.add(list.array);

    filter.check('bordel de merde').should.be.true;
  })

  it("should return true for 'conne' word", function () {
    var list = require('../dist/index');
    filter.clearList();
    filter.add(list.array);

    filter.check('conne').should.be.true;
  })
});