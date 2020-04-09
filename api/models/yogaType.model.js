const mongoose = require('mongoose')

const yogaTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})
const yogaTypeModel = mongoose.model('yogatype', yogaTypeSchema)
module.exports = yogaTypeModel
