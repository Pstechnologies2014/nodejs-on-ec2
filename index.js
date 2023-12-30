var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('WELCOME TO PS TECHNOLOGIES DEPLOYED IN THE NODEJS APPLICATION USING EC2 INSTANCE'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
