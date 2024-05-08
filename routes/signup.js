const express = require('express');
const router = express.Router()
const signupCtrl = require('../controllers/tickets')

router.post('/', signupCtrl.create)

module.exports = router;