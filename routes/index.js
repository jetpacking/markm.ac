var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'markm.ac' });
});

router.get('/blog', function(req, res, next) {
  res.redirect(301, 'http://markm.ac');
});

module.exports = router;
