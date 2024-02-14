var express = require('express')
var router = express.Router()
const passport = require('passport')

router.get('/', (req, res) => {
  res.render('index', { title: 'GAMEPLEX' })
})

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
)
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/games',
    failureRedirect: '/games'
  })
)

router.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/games')
  })
})

module.exports = router
