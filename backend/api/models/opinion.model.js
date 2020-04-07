const mongoose = require('mongoose')


const opinionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: userSchema
  },
  text: String,
  rate: {
    type: Number,
    min: 0,
    max: 5
  }
})