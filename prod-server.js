/**
 * Created by Administrator on 2017/12/7 0007.
 */

var express = require('express');
var proxy = require('http-proxy-middleware');
var open = require('opn');

var app = express();
var port = 8989;


app.use('/yzlpms', proxy({target: 'http://dev.inzlink.com', changeOrigin: true}));

app.use(express.static('./src/css3-animate'))

app.listen(port, function () {
    console.log('服务器启动完成....');
    var uri = 'http://localhost:' + port + '/index.html';
    open(uri);
});