var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article')

/* GET users listing. */
router.post('/article', articleController.create);
router.get('/article', articleController.get)

module.exports = router;
