const Session = require('../models/session')
const Game = require('../models/game')

const createSession = async (req, res) => {
  try {
    const session = new Session({
      PlayerIds: [req.user._id],
      loacation: req.body.location,
      date: req.body.date,
      gameId: req.params.id
    })
    await session.save()
    const game = await Game.findById(req.params.id)
    game.sessionIds.push(session._id)
    await game.save()

    await res.redirect(`/games/${req.params.id}`)
  } catch (err) {
    console.log(err)
    res.redirect(`/games/${req.params.id}`)
  }
}

module.exports = { create: createSession }
