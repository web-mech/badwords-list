var assert = require('better-assert');
var filter = require('leo-profanity');

describe('filter', function(){
  it("should return '****** de *****' for 'bordel de merde' input", function(){
    var list = require('../lib/index');
    filter.clearList();
    filter.add(list.array);
    assert(filter.clean('bordel de merde') === '****** de *****');
  });

  it("should return true for 'bordel de merde' input", function(){
    var list = require('../lib/index');
    filter.clearList();
    filter.add(list.array);
    assert(filter.check('bordel de merde'));
  });
});