const Session = require('../models/session')

const createSession = async (req, res) => {
  try {
    const session = new Session({
      PlayerIds: [req.body.user],
      loacation: req.body.location,
      date: req.body.date,
      gameId: req.params.id
    })
    await session.save()

    res.redirect(`/games/${req.params.id}`)
  } catch (err) {
    console.log(err)
    res.redirect(`/games/${req.params.id}`)
  }
}

module.exports = { create: createSession }
