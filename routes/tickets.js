const express = require('express');
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')
const middleware = require('../middleware/index')

router.post(
    '/',
    middleware.stripToken,
    middleware.verifyToken,
    ticketsCtrl.create
)
router.post('/', ticketsCtrl.create)
router.get('/:id', ticketsCtrl.viewId)

module.exports = router;