const CenterModel = require('../models/centers.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getAllCenters,
  getCenter,
  getAllOpinions,
  addOpinion
}

function getAllCenters (req, res) {
  CenterModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getCenter (req, res) {
  CenterModel
    .findById((req.params.centerId))
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getAllOpinions (req, res) {
  CenterModel
    .findById((req.params.centerId))
    .then(response => res.json(response.opinion))
    .catch((err) => handleError(err, res))
}

function addOpinion (req, res) {
  const opinionId = req.body.newOpinion
  CenterModel
    .findById((req.params.centerId))
    .then(center => {
      center.opinion.push(opinionId)
      center.save()
    })
    .catch((err) => handleError(err, res))
}
