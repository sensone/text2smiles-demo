var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/build'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + 'build/index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
