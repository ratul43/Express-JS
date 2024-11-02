var express = require('express');

var bodyParser = require('body-parser');

 var app = express();

app.use(bodyParser.json());

app.post('/', function(req, res) {


   let JSONData = req.body;
   /*let JSONstring =  JSON.stringify(JSONData);*/

    //for specific JSON property
    let name = JSONData['name'];
    let city = JSONData['city'];
   res.send(name + ' ' + city);
})

app.listen(8000, function(){
    console.log("Server run success");
})


