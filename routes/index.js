var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Hello Angular App!' });
  res.send('<h1>HELLO ANGULAR</h1>');
});
module.exports = router;
