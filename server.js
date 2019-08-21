//requirements
var express = require('express');
//port
var PORT = process.env.PORT || 3003;
//express
var app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + './views'));

//exp-handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//route - burgers_controllers
var routes = require("./controllers/burgers_controllers.js");
app.use(routes);



app.listen(PORT, function () {
    console.log("App now listening at http://localhost:" + PORT);
});