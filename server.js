var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8000;


var main = app.use('/', express.static('/client'));

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname +'/index.html'));
});

// app.get('/about', function(req, res) {
// 	res.sendFile('about.html' , { root: path.join('/templates')});
// });

app.listen(PORT, function(){

	console.log('running on ' + PORT);
});
