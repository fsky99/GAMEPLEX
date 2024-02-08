const express = require("express")
const router = express.Router()
const sessionsCtrl = require("../controller/sessions")

router.post("/games/:id/sessions", sessionsCtrl.create)

module.exports = router