var assert = require('better-assert');
var Filter = require('bad-words');

describe('filter', function(){
  it("should return 'xxxxxx de xxxxx' for 'bordel de merde' input", function(){
    var list = require('../lib/index');
    var filter = new Filter({ placeHolder: 'x', emptyList: true}); 
    filter.addWords(list.array);

    assert(filter.clean('bordel de merde') === 'xxxxxx de xxxxx');
  });
});