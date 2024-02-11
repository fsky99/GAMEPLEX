const express = require('express')
const router = express.Router()
const sessionsCtrl = require('../controllers/sessions')

router.post('/games/:id/sessions', sessionsCtrl.create)
router.put('/sessions/:id/join', sessionsCtrl.join)
router.put('/sessions/:id/leave', sessionsCtrl.leave)
router.delete('sessions/:id', sessionsCtrl.remove)

module.exports = router
