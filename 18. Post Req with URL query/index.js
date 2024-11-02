var express = require('express');

app = express();


app.post("/", function (req, res) {
   let firsName =  req.query.firstName;
   let lastName = req.query.lastName;

   res.send(firsName + " " + lastName);

})

app.listen(8000, function(){
    console.log("Server run success");
})


