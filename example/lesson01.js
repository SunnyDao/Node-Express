const http = require('http');
const url = require('url');
const server = http.createServer();

console.log('1111');

server.listen(8200);

let users = [];

server.on('request',(req,res)=>{

    console.log(req.method);
    console.log(req.url);

    const parseURL = url.parse(req.url);
    console.log(parseURL);

    if(parseURL.path.indexOf('/user') === -1){
        res.statusCode = 403;
        res.end(`${res.statusCode} not allowed`);
        return;
    }

    switch (req.method){
        case 'GET':
            res.statusCode = 200;
            res.end(JSON.stringify(users));
            break;
        case  'POST':
            req.on('data',(data)=>{

            });
            break;

        case 'PATCH':
            break;

        case 'DELET':
            break;
    }
});