var http = require('http');
http.createServer(function(req, res) {
  
    res.writeHead(200, {​​​​​​"Content-Type": "application/json"}​​​​​​)
    var otherArray = ["item1", "item2"];
    var otherObject = {​​​​​​​​​​​​​​​​​​​​​​​​​​​ item1: "item1val", item2: "item2val" }​​​​​​​​​​​​​​​​​​​​​​​​​​​;
    var json = JSON.stringify({​​​​​​​​​​​​​​​​​​​​​​​​​​​
      anObject: otherObject,
      anArray: otherArray,
      another: "item"
    }​​​​​​​​​​​​​​​​​​​​​​​​​​​);
    
  res.end(json);

  res.write(req.url);
  //res.write('<p>Hola mundo!</p>');

  res.end();
}).listen(8080);

