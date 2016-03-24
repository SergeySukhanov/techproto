/**
 * Created by developer on 18.03.16.
 */

var express = require("express");
var bodyParser = require("body-parser");
var jsonfile = require("jsonfile");

var app = express();

var db_states = require("./model/states");

app.use(express.static("webapp"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send(null);
});
app.get('/states', function(req, res) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(db_states));
});
app.post('/save/states', function(req, res) {
    console.log("Saving states...");
    if (req.body) {
        db_states = req.body;
        jsonfile.writeFile('./model/states', db_states, {spaces: 4}, function(err) {
            if(err) {
                console.log(err);
                res.status(500).send();
            } else {
                res.status(200).send();
            }
        });
    }
});

app.listen(1234, function(){
    console.log("http://localhost:1234");
});