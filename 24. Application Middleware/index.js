var express = require('express');
var app = express();



app.use(function(req,res,next){

    console.log("I am application level middleware")
    next();


})


app.get('/', function (req, res) {
    res.send("This is home page")
})

app.get('/contact', function (req, res) {
    res.send("This is contact page")
})

app.get('/about', function (req, res) {
    res.send("This is about page")
})






app.listen(8000, function(){
    console.log("Server run success");
})


