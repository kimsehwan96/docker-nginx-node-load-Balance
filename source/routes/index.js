var express = require('express');
var uuid = require('uuid')
var router = express.Router();
const workerNumber = uuid();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express, 로드 밸런싱 태스트 중',
    body: `this is ${workerNumber} worker`
 });
});

module.exports = router;
