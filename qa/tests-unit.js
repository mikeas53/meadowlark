var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('Тесты печенек-предсказаний', function(){
    test('getFortune() должна возвращать пердсказание', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
});