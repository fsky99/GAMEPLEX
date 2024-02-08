const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sessionScehma = new Schema({
  content : {
  playersIds:  [{ type: Schema.Types.ObjectId ,
    ref: 'playersId' }],
location : String ,
date : Date ,
gamesId:  [{ type: Schema.Types.ObjectId ,
  ref: 'gamesId'}],
max : Number
  },
  timestamp: true
})

module.exports = mongoose.model('Session', sessionScehma)