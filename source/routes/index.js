var express = require('express');
var router = express.Router();
function uuidv4() {      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8); return v.toString(16);      });  } 

const workerNumber = uuidv4();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express, 로드 밸런싱 태스트 중',
    uuid: workerNumber
 });
});

module.exports = router;
