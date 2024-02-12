const Session = require('../models/session')
const Game = require('../models/game')
const User = require('../models/user')

const createSession = async (req, res) => {
  try {
    console.log(req.user)
    const session = new Session({
      playerIds: [],
      location: req.body.location,
      date: req.body.date,
      gameId: req.params.id,
      max: req.body.max
    })
    session.playersIds.push(req.user._id)
    await session.save()
    const game = await Game.findById(req.params.id)
    game.sessionIds.push(session._id)
    await game.save()
    const user = await User.findById(req.user._id)
    user.sessionsId.push(session._id)
    await user.save()

    res.redirect(`/games/${req.params.id}`)
  } catch (err) {
    console.log(err)
    res.redirect(`/games/${req.params.id}`)
  }
}

const join = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
    session.playersIds.push(req.user._id)
    session.save()
    const user = await User.findById(req.user._id)
    user.sessionsId.push(req.params.id)
    await user.save()

    res.redirect(`/games/${req.query.id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/games/${req.query.id}`)
  }
}

const leave = async (req, res) => {
  try {
    await User.updateOne(
      { _id: req.user._id },
      {
        $pullAll: {
          sessionsId: [req.params.id]
        }
      }
    )
    await Session.updateOne(
      { _id: req.params.id },
      {
        $pullAll: {
          playersIds: [req.user._id]
        }
      }
    )
    res.redirect(`/games/${req.query.id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/games/${req.query.id}`)
  }
}

const removeSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id)
    console.log(req.params.id)
    for (let i = 0; i < session.playersIds.length; i++) {
      await User.updateOne(
        { _id: session.playersIds[i] },
        {
          $pullAll: {
            sessionsId: [req.params.id]
          }
        }
      )
    }
    await Game.updateOne(
      { _id: req.query.id },
      {
        $pullAll: {
          sessionIds: [req.params.id]
        }
      }
    )
    await Session.deleteOne({ _id: req.params.id })
    await Session.save()

    res.redirect(`/games/${req.query.id}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/games/${req.query.id}`)
  }
}

module.exports = { create: createSession, remove: removeSession, join, leave }
