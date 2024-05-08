const express = require('express');
const router = express.Router()
const signinCtrl = require('../controllers/signin')

router.post('/', signinCtrl.auth )

module.exports = router;