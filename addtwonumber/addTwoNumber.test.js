
const {addTwoNumber} = require('./addTwoNumber');


test('Should output the sum of two number', function(){
    const sum = addTwoNumber(3, 6);
    expect(sum).toBe(9);
});


test('Should return falsy if not a number', function(){
    const sum = addTwoNumber(null, 6);
    expect(sum).toBeFalsy();
});

test('Should output a sumof teo number', function(){
    const sum = addTwoNumber(0, 8);
    expect(sum).toBe(8);
});