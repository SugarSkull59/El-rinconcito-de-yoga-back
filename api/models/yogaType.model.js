const mongoose = require('mongoose')

const yogaTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})
const yogaTypeModel = mongoose.model('user', yogaTypeSchema)
module.exports = yogaTypeModel
