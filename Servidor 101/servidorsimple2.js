var http = require('http');
http.createServer(function(req, res) {

    res.writeHead(200, { "Content-Type": "application/json" })
    var otherArray = ["item1", "item2"];
    var otherObject = { item1: "item1val", item2: "item2val" };
    var json = JSON.stringify({
        anObject: otherObject,
        anArray: otherArray,
        another: "item"
    });
    res.end(json);

}).listen(8080);