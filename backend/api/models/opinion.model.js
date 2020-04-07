const mongoose = require('mongoose')

const opinionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  text: String,
  rate: {
    type: Number,
    min: 0,
    max: 5
  }
})
const opinionModel = mongoose.model('opinion', opinionSchema)
module.exports = opinionModel
