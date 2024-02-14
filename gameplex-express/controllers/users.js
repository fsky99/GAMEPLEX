const User = require('../models/user')

const show = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate('sessionsId')
    for (let i = 0; i < user.sessionsId.length; i++) {
      await user.sessionsId[i].populate(['playersIds', 'gameId'])
    }
    user.save()
    res.render('users/profile', { title: user.name, user })
  } catch (error) {
    console.log(error)
    res.redirect('/games')
  }
}

module.exports = { show }
