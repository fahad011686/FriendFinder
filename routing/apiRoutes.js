var path = require("path");
var userInfo = require("../app/data/friends.js");
console.log(userInfo);

module.exports = function (server) {
    server.post("/api/friends", function (req, res) {
        // console.log(req.body);
        userInfo.push(req.body);
        res.json(req.body)

    });

    server.get("/api/friends", function (req, res) {
        res.send(userInfo)
    })
   

};
