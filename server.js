var path = require("path");
var express = require("express");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
