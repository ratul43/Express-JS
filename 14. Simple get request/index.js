var express = require('express');

app = express();


app.get('/', function (req, res) {
    res.end('This is simple get request!');
})

app.listen(8000, function(){
    console.log("Server run success");
})


