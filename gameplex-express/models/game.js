const mongoose = require("mongoose")

const Schema = mongoose.Schema

const gamesSchema = new Schema({
  content: {
    name: String,
    type: String,
    poster: String,
    sessionIds: [{ type: Schema.Types.ObjectId ,ref: 'sessionId' }],
  },
  timestamp: true,
})

module.exports = mongoose.model('Games', gamesSchema)
