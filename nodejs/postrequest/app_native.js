const https = require('https');

let reqRes = [];
reqRes.push({ req: { name: 'test', job: 'writer' }, res: null });
reqRes.push({ req: { name: 'test2', job: 'reader' }, res: null });

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


for (let i = 0; i < reqRes.length; i++) {
    const options = {
        hostname: 'reqres.in',
        path: '/api/users',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': JSON.stringify(reqRes[i].req).length
        }
    };


    const req = https.request(options, (res) => {
        let data = '';

        // console.log('Status Code:', res.statusCode);

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            // console.log('Body: ', JSON.parse(data));
            reqRes[i].res = JSON.parse(data);
            onResponseEnd('end');
        });

    }).on("error", (err) => {
        // console.log("Error: ", err.message);
        reqRes[i].res = err.message;
        onResponseEnd('error');
    });

    req.write(JSON.stringify(reqRes[i].req));
    req.end();
}