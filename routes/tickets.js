const express = require('express');
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

router.post('/', ticketsCtrl.create)
router.get('/:id', ticketsCtrl.viewId)

module.exports = router;