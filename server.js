var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public')); 



// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });