const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gamesSchema = new Schema(
  {
    name: String,
    type: String,
    poster: String,
    sessionIds: [{ type: Schema.Types.ObjectId, ref: 'Session' }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Games', gamesSchema)
