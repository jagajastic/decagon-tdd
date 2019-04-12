const getApi = require('./gitApiRepo');

test('Should output a name', function () {
    return getApi().then(function(resp){
        // console.log(resp);
        expect(resp).toBeDefined();
    })
});