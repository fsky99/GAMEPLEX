const express = require("express")
const router = express.Router()

const gamesCtrl = require("../controller/games")

router.get("/", gamesCtrl.index)
router.get("/new", gamesCtrl.new)
router.get("/:id", gamesCtrl.show)
router.post("/", gamesCtrl.create)

module.exports = router
