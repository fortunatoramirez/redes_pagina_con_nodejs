var express = require('express');
var app = express();
var server = require('http').Server(app);

app.use("/",express.static('public'));

server.listen(5001, function(){
	console.log("Servidor corriendo en http://localhost:5001");

});