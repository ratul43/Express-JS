var express = require('express');

app = express();

// Simple String Response
// res.send()--> response Body
// res.end()--> response ending point



app.get("/one", function(req,res){
    res.end("This is simple string response");
})

app.post("/two", function(req,res){
    res.end("This is simple string response");
})


app.listen(8000, function(){
    console.log("Server run success");
})


