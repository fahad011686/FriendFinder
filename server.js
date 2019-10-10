var path = require("path");
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require("./routing/htmlRoutes")(app);
// require("./routing/apiRoutes")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
