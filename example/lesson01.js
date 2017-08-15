/*
*
*
*
*/
const http = require('http')
let server = http.createServer();

server.listen(8200)

const users = [];

server.on('request',(req,res)=>{
    switch (req.method){
        case 'GET':
            res.statusCode = 200;
            res.end(JSON.stringify(users));
            break;
        case  'POST':
            break;

        case 'PATCH':
            break;

        case 'DELET':
            break;
    }
})