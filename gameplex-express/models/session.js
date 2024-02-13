const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    userName: String,
    content: String
  },
  {
    timestamps: true
  }
)

const sessionSchema = new Schema(
  {
    playersIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    location: String,
    date: Date,
    gameId: { type: Schema.Types.ObjectId, ref: 'Game' },
    max: Number,
    comments: [commentSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Session', sessionSchema)
