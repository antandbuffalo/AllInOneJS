const axios = require('axios');

let reqRes = [];
reqRes.push({req: {name: 'test', job: 'writer'}, res: null});
reqRes.push({req: {name: 'test2', job: 'reader'}, res: null});

let onResponseEnd = function() {
    let isAllRequestFinished = true;
    for(let i=0; i < reqRes.length; i++) {
        if(reqRes[i].res == null) {
            // wait for all request to finish
            isAllRequestFinished = false;
            break;
        }
    }
    if(isAllRequestFinished) {
        for(let i=0; i < reqRes.length; i++) {
            console.log('All response - ', reqRes[i].res);
        }
        // you can return the object here
    }
}


for(let i=0; i < reqRes.length; i++) {
    axios.post('https://reqres.in/api/users', reqRes[i].req)
        .then((res) => {
            reqRes[i].res = res.data;
            onResponseEnd();
        }).catch(err => {
            console.log('error ', err);
            reqRes[i].res = err;
            onResponseEnd();
        });
}

