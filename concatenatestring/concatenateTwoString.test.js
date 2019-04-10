const { concatenateTwoString } = require('./concatenateTwoString');

test('Concatenate two string', function(){
    const concatStrings = concatenateTwoString('Hello', 'world')
    expect(concatStrings).toBe('Hello world');
});

test('Concatenate number and string', function(){
    const concatStrings = concatenateTwoString(56, 'Yess boy');
    expect(concatStrings).toBeFalsy();
})