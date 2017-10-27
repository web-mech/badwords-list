var should = require('chai').should();

describe('filter', function(){
  it('Should contain property object', function(){
    var list = require('../dist/index');
    list.hasOwnProperty('object').should.be.true;
  });

  it('Should contain property array', function(){
    var list = require('../dist/index');
    list.hasOwnProperty('array').should.be.true;
  });

  it('Should contain property regex', function(){
    var list = require('../dist/index');
    list.hasOwnProperty('regex').should.be.true;
  });
});