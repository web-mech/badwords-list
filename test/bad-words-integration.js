var should = require('chai').should();
var Filter = require('bad-words');

describe('bad-words filter', function(){
  it("should return 'xxxxxx de xxxxx' for 'bordel de merde' input", function(){
    var list = require('../lib/index');
    var filter = new Filter({ placeHolder: 'x', emptyList: true}); 
    filter.addWords(list.array);

    filter.clean('bordel de merde').should.be.equal('xxxxxx de xxxxx');
  });
});