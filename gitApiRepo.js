const fetch = require('node-fetch');
const getApi =  function() {
    return  fetch(
        'https://api.github.com/users/jagajastic/repos', {
            method: 'GET'
        }
    ).then(function(resp){
        return resp;
    });
};
// const response = getApi();
module.exports = getApi;