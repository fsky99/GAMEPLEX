var express = require("express")
var router = express.Router()
const passport = require("passport")

/* GET home page. */
router.get("/", (req, res) => {
  res.render("/games")
})

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
)

module.exports = router
