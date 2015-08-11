var express 	= require('express'),
	app 		= express(),
	requests 	= require('./Requests');

// Define Routes
app.get('/*', requests.Get);
app.post('/*', requests.Post);

// Start the Debugger Server
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('HTTP Debugger listening to all routes at http://%s:%s', host, port);
});