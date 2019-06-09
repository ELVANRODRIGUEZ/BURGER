// ======================================== DEPENDENCIES
var express = require("express");
var routes = require("./controllers/burger_controller.js");
var path = require("path");
var handlebars = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var app = express();


// ======================================== APP USAGES
app.use("/public", express.static(path.join(__dirname, '/public/')));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(routes);
app.engine("handlebars", handlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// ======================================== PORT LISTENING;
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});