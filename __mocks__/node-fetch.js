const fetch = function(url, fetchPrams){
    if(
        url === 'https://api.github.com/users/jagajastic/repos' &&
        fetchPrams.method === 'GET'
    ){
        return Promise.resolve([
            {
              "id": "1",
              "createdAt": "2019-04-11T21:39:39.816Z",
              "name": "Arturo Welch Sr.",
              "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/switmer777/128.jpg"
            },
            {
              "id": "2",
              "createdAt": "2019-04-11T15:30:39.320Z",
              "name": "Annie Kemmer DDS",
              "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/woodydotmx/128.jpg"
            }
          ]);
    }
}
module.exports = fetch;