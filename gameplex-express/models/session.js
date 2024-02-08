const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sessionSchema = new Schema({
  content : {
  playersIds:  [{ type: Schema.Types.ObjectId ,
    ref: 'User' }],
location : String ,
date : Date ,
gameId:  { type: Schema.Types.ObjectId ,
  ref: 'Game'},
max : Number
  },
  timestamp: true
})

module.exports = mongoose.model('Session', sessionSchema)
