var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res) {
	res.render('login');
});

app.get('/auth/google', function(req, res){
    res.render('logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Page not found');
});