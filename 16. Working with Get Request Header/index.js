var express = require('express');

app = express();


app.get('/', function (req, res) {

  let firstName =  req.header('firstName');
  let lastName =  req.header('lastName');
  let UserAgent = req.header('User-Agent');

    res.end(UserAgent);


})

app.listen(8000, function(){
    console.log("Server run success");
})


