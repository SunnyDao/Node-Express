const http = require('http');
const url = require('url');
const server = http.createServer();

//console.log('1111');

server.listen(8200);

const users = [];

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
            req.on('data',(buffer)=>{
                const userStr = buffer.toString();
                let CT = req.headers['content-type'];
                if (CT === 'application/json') {
                    user = JSON.parse(userStr);
                    users.push(user);
                }
            });
            req.on('end', () => {
                res.statusCode = 201;
                res.end('Great! User created!');
            });
            break;

        case 'PATCH':
            let username = parseURL.path.substring(6,parseURL.path.length);
            req.on('data',(buffer)=>{
                const userStr = buffer.toString();
            })

            break;

        case 'DELETE':
            break;
    }
});