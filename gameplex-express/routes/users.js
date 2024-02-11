var express = require("express")
var router = express.Router()

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource")
})
router.get("/profile", function (req, res, next) {
  // res.render("games/profile", { title: "Profile " },user)});
  let user = req.user
  res.render("/games/profile", user)
})
module.exports = router
