const mongoose = require('mongoose')
const opinionSchema = require('./opinion.model')

const centerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  direction: {
    type: String,
    required: false
  },
  province: {
    type: String,
    required: true
  },
  schedule: {
    type: String,
    required: false
  },
  opinion: [opinionSchema],
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  social_fb: {
    type: String,
    required: false
  },
  social_insta: {
    type: String,
    required: false
  },
  social_web: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: true
  },
  teachers: {
    type: [String],
    required: false
  },
  type_of_yoga: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'yogaType'
  }],
  price_range_min: {
    type: Number,
    required: false
  },
  price_range_max: {
    type: Number,
    required: false
  },
  google_map_embed_iframe: String,
  geo: {
    type: [Number],
    index: '2dsphere',
    required: false
  }
})
const centerModel = mongoose.model('center', centerSchema)
module.exports = centerModel
