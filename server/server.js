var express = require('express');
var hbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.send('home');
});

app.listen(5000, function(){
  console.log('listening');
});
