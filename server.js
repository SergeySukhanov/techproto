/**
 * Created by developer on 18.03.16.
 */

var express = require("express");

var app = express();

app.use(express.static("webapp"));

app.get('/', function(req, res){
    res.send(null);
});

app.listen(1234, function(){
    console.log("http://localhost:1234");
});