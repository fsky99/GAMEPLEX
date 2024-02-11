const express = require('express')
const router = express.Router()
const sessionsCtrl = require('../controllers/sessions')

router.post('/games/:id/sessions', sessionsCtrl.create)
router.put('/games/:id/join', sessionsCtrl.join)

module.exports = router
