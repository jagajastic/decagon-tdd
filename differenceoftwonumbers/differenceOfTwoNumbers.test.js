const { differenceOfTwoNumbers } = require('./differenceOfTwoNumbers');

test('Different of two positive number', function(){
    const differencOfNumber = differenceOfTwoNumbers(4, 5);
    expect(differencOfNumber).toBe(-1);
});

test('Difference of string and number', function(){
    const differencOfNumber = differenceOfTwoNumbers('hello', 8);
    expect(differencOfNumber).toBeFalsy();
});

test('difference of special character and negative number', function(){
    const differencOfNumber = differenceOfTwoNumbers('@', -9);
    expect(differencOfNumber).toBeFalsy();
});