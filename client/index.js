const express = require('express');
//var router = express.Router();
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(__dirname + '/dist/Recipe-API'));

app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port,() => console.log('Running...'));


/* GET home page. */
//router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Hello Angular App!' });
//  res.send('<h1>HELLO ANGULAR</h1>');
//});
//module.exports = router;


