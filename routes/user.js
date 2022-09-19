const express = require("express");
const router = express.Router();
const userCtrl = require('../controllers/user')

// nos routes pour permettre le login / signup des users

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);



module.exports = router;