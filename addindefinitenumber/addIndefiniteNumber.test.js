const { addIndefiniteNumber } = require('./addIndefiniteNumber');

test('should output sum of indefinit number', function(){
    const sumIdefiniteNum = addIndefiniteNumber(4,5,2,6,8,9,0);
    expect(sumIdefiniteNum).toBe(34);
});

test('Should output falsy', function(){
    const sumIdefiniteNum = addIndefiniteNumber('54',8,3,0,12);
    expect(sumIdefiniteNum).toBeFalsy();
});

test('Should return falsy when boolean is among the value', function(){
    const sumIdefiniteNum = addIndefiniteNumber(true, false, -9, 'hdhd', '+');
    expect(sumIdefiniteNum).toBeFalsy();
});

test('Test for no params', function(){
    const sumIdefiniteNum = addIndefiniteNumber();
    expect(sumIdefiniteNum).toBeFalsy()
});