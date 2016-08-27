// this is server.js

var http = require('http');
var url = require('url');

var CONTENT_TYPE_JSON = {'Content-Type': 'application/json'};

var serverData = "default data";

//Router handles all requires and routes based on request path

var router = function(req, res){
  var reqUrl = url.parse(req.url,true);
  switch(reqUrl.pathname){
    case '/set-data':
      //Set serverData from postData
      parseJSONPost(req, res, function(postData, res){
        //NEW LINE
        serverData = postData.data;

        res.writeHead(200, CONTENT_TYPE_JSON);
        var output = { result: 'success'};
        res.end(JSON.stringify(output));
      });
      break;
    case '/get-data':
      //Send serverData to the client
      res.writeHead(200, CONTENT_TYPE_JSON);
      var output = { data: serverData };
      res.end(JSON.stringify(output));
      break;
    default:
      // Send 404
      res.writeHead(404, CONTENT_TYPE_JSON);
      var output = { result: '404'};
      res.end(JSON.stringify(output));
      break;

  }
};

//parseJSONPost will read POST body and parse as JSON object
//which is then passed to the onResult callback
function parseJSONPost(req, res, onResult){
  var postBody = "";

  req.on('data', function(chunk){
    postBody += chunk;
  });

  req.on('end', function(){
    var postData = JSON.parse(postBody);
    onResult(postData, res);
  });
}

//Create the server using our router and export the server

var server = http.createServer(router);
module.exports = server;
