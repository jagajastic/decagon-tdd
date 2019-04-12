
const { divideTwoNumbers } = require('./divideTwoNumbers');

test('Divide the first number by last number ', function(){
    const divideNumber = divideTwoNumbers(4, 2);
    expect(divideNumber).toBe(0.5);
});

test('Divide position integer by string or special character', function(){
    const divideNumber = divideTwoNumbers('@', -0);
    expect(divideNumber).toBeFalsy();
});

test('Divide empty params', function(){
    const divideNumber = divideTwoNumbers();
    expect(divideNumber).toBeFalsy();
});