var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/interest_rate', function(req, res) {
	var rate = Math.floor(Math.random() * 2000) / 100;
	console.log(rate);
	return res.json(rate);
})

app.listen(8080);