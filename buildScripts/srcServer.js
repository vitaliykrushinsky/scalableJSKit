var express = require('express'),
    path = require('path'),
    open = require('open');

var port = 3000;    
var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
