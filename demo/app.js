var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('hello world');
})

var server = app.listen(3000,function(){
    var host = server.address().address,
        port = server.address().port;
    
    console.log('测试', host, port)
})