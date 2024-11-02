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

// Response Status Code
app.get("/three", function(req,res){
    res.status(201).end("Unauthorized");
})



// JSON Response
app.get("/four", function(req,res){

    let MyJSONArray = [
        {
            name: "Hasan",
            city: "Dhaka",
            occupation: "Engr."
        },
        {
            name: "Alex",
            city: "Rajshahi",
            occupation: "Pharmacists"
        },
        {
            name: "Roncky",
            city: "Sylhet",
            occupation: "Teacher"
        }
    ]
    res.json(MyJSONArray);

})


app.get("/five", function(req,res){

    res.download("./uploads/img.jpg");
})


app.get("/Bangladesh", function(req,res){

    res.redirect("http://localhost:8000/Singapore")

})


app.get("/Singapore", function(req,res){

    res.send("This is singapore");
})


app.get("/Six", function(req,res){

    res.append("name","Istiak Hasan")
    res.append("city","Dhaka")
    res.append("age","30 years old");

    res.status(201).end("Hello World");

})



app.get("/Seven", function(req,res){
    res.cookie('name', 'Labib')
    res.cookie('city', 'Dhaka')
    res.cookie('age', '30 years old')
    res.end("cookie set success")

})

// Clear cookies
app.get("/Eight", function(req,res){

    res.clearCookie('name')
    res.clearCookie('age')
    res.clearCookie('city')

    res.end("cookie clear success")

})




app.listen(8000, function(){
    console.log("Server run success");
})


