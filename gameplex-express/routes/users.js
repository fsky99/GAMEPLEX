var express = require('express')
var router = express.Router()
const usersCtrl = require('../controllers/users')

/* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.send("Salman")
// })
router.get('/', usersCtrl.show)
module.exports = router
