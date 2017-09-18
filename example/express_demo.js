const express =require('express');
const path = require('path');
const bodyParse = require('body-parser');
const cookieParse = require('cookie-parser');

const app = express();

app.get('/',(req,res)=>{

});

app.use((err,req,res,next)=>{
    console.log(req);
    console.log(res);
    res.status(404)
});

app.use((err,req,res,next)=>{

});

app.listen('8084',()=>{
   console.log('listen on 8084...')
});
