var express = require("express")
var router = express.Router()

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("Salman")
// })
router.get("/", function (req, res, next) {
  // res.render("games/profile", { title: "Profile " },user)});
  let user = req.user
  console.log("This is the user!!!!! " + user)
  res.render("games/profile",{ title: "Profile" ,user})
})
module.exports = router
