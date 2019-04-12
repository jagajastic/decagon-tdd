
const {multipleOfIndefiniteNumbers } = require('./multipleOfIndefiniteNumbers');

test('Multiple of indefinite positive numbers', function(){
    const multipleOfNumbers = multipleOfIndefiniteNumbers(4,2);
    expect(multipleOfNumbers).toBe(8);
});

test('Mulltiple of four positive number', function(){
    const multipleOfNumbers = multipleOfIndefiniteNumbers(1,4,3,2);
    expect(multipleOfNumbers).toBe(24);
});

test('Multiple of special character, strings and positive and negative number', function(){
    const multipleOfNumbers = multipleOfIndefiniteNumbers('hello', '@', 9, -0, 99, true, false);
    expect(multipleOfNumbers).toBeFalsy();
});

test('Multiple two argument with no value', function(){
    const multipleOfNumbers = multipleOfIndefiniteNumbers();
    expect(multipleOfNumbers).toBeFalsy();
});
