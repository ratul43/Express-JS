var express = require('express');

app = express();


app.post("/", function (req, res) {

  let userName =   req.header('userName');
  let password = req.header('password');

    res.send( "User Name :" + userName +  "Password :" + password );



})

app.listen(8000, function(){
    console.log("Server run success");
})


