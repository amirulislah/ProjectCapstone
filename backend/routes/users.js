var express = require('express');
var router = express.Router();
const authControler = require('../controllers/login')
/* GET users listing. */
router.post('/login', authControler.login);
router.post('/register', authControler.register);

module.exports = router;
