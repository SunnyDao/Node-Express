var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    // 主页
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("这里是首页!");
  }

  // About页面
  else if (req.url == "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("关于页面!");
  }

  // 404错误
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404页面");
  }
}).listen(8085);






