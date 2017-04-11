var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html/'});
});

server.get('/ourstory', function(request, response){
  response.sendFile('ourStory.html', { root: __dirname + '/public/html/ourstory'});
});

server.get('/ourteam', function(request, response){
  response.sendFile('ourTeam.html', { root: __dirname + '/public/html/ourteam'});
});

server.get('/mediaandresources', function(request, response){
  response.sendFile('mediaAndResources.html', {root:__dirname + 'public/html/mediaandresources'});
});
server.listen(port, function(){
  console.log("Now listening on port", port);
});
