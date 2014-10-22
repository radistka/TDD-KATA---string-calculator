var expect = require('chai').expect;
var Calculator = require('../lib/string-calculator');

suite("Calculator test", function(){
    var calculator = new Calculator();
    test("should return 0 when ''", function(){
        expect(calculator.add('')).to.equal(0);
    });
    test("should return number when incoming string length == 1", function(){
        expect(calculator.add('1')).to.equal(1);
    });
    test("should return number when incoming string length == 1", function(){
        expect(calculator.add('2')).to.equal(2);
    });
    test("should return sum of numbers when incoming string contains more then 1 numbers", function(){
        expect(calculator.add('1,2')).to.equal(3);
    });
    test("should return sum of numbers when incoming string contains more then 1 numbers", function(){
        expect(calculator.add('7,3')).to.equal(10);
    });
    test("should return sum of numbers when incoming string contains more then 1 numbers", function(){
        expect(calculator.add('7,0')).to.equal(7);
    });
    test("should return sum of numbers when incoming string contains more then 1 numbers", function(){
        expect(calculator.add('7,0,3')).to.equal(10);
    });
    test("should return sum of numbers when incoming string contains more then 1 numbers", function(){
        expect(calculator.add('7,0,3,8')).to.equal(18);
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('7\n0,3,8')).to.equal(18);
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('7,\n0,3,8')).to.equal('error');
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('7,\n,0,3,8')).to.equal('error');
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('7\n0,3\n8')).to.equal(18);
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('//;\n7\n0;3\n8')).to.equal(18);
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('//;\n7\n0;3\n8,4,6,7;7')).to.equal(42);
    });
    test("should return sum of numbers with new line separator", function(){
        expect(calculator.add('//;\n7\n0;3\n8;2;3,4,5\n,6')).to.equal('error');
    });
    test("should return error about negative number", function(){
        expect(calculator.add('//;\n-7\n0;3\n8;2;3,4,5\n6')).to.equal('negatives not allowed : -7');
    });
    test("should return error about negative number", function(){
        expect(calculator.add('//;\n7\n0;-3\n8;-2;3,-4,5\n6')).to.equal('negatives not allowed : -3 -2 -4');
    });
    test("should return number ignored items > 1000", function(){
        expect(calculator.add('//;\n1007\n0;3\n8;2;3,4,5\n6')).to.equal(31);
    });
    test("should return number ignored items > 1000", function(){
        expect(calculator.add('1000,1')).to.equal(1);
    });
    test("should return sum of numbers with any length delimiters", function(){
        expect(calculator.add('//[***]\n2***1')).to.equal(3);
    });
    test("should return sum of numbers with multiply delimiters", function(){
        expect(calculator.add('//[***][!!][??][bb]\n2***1!!1??1bb5')).to.equal(10);
    });
    test("should return sum of numbers with multiply delimiters", function(){
        expect(calculator.add('//[***][!!][??]\n2***1!!1??1\n5')).to.equal(10);
    });
    test("should return sum of numbers with multiply delimiters", function(){
        expect(calculator.add('//[***][!!][??]\n2***1!!1??1,5')).to.equal(10);
    });
    test("should return sum of numbers with multiply delimiters", function(){
        expect(calculator.add('//[***][!!][??][bb]\n0***0!!0??0bb0')).to.equal(0);
    });
    test("should return sum of numbers with multiply delimiters", function(){
        expect(calculator.add('//[***][!!][??][bb]\n0***0!!,0??0bb0')).to.equal('error');
    })
});