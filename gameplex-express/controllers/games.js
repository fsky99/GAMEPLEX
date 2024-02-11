const Game = require("../models/game")

module.exports = {
  index,
  show,
  new: newGame,
  create,
}

async function index(req, res) {
  const games = await Game.find({})
  res.render("games/index", { title: "All Gmaes", games })
}

async function show(req, res) {
  const game = await Game.findById(req.params.id).populate("sessionId")
  res.render("games/show", { title: "Game Detail", game })
}

function newGame(req, res) {
  res.render("games/new", { title: "Add New Game", errorMsg: "" })
}
async function create(req, res) {
  console.log(req.body)
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // }
  try {
    // req.body.sessionIds = []
    await Game.create(req.body)
    res.redirect("/games")
  } catch (err) {
    console.log("This is the error!!!" + err)
    res.render("games/new", { errorMsg: err.message })
  }
}
