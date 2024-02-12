const User = require('../models/user')

const show = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('sessionsId')
    res.render('users/profile', { title: user.name, user })
  } catch (error) {
    console.log(error)
    res.redirect('/games')
  }
}

module.exports = { show }
