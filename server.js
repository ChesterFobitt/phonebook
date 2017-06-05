const opn = require('opn');
const express = require('express');
const app = express();

app.use('/', express.static(__dirname + '/app'));

app.listen(3030, function(){
    console.log('Server started: http://localhost:3030/');
    opn('http://localhost:3030/');
});