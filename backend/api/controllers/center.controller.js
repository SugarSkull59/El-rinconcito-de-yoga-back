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
    .findById((req.params.id))
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getAllOpinions (req, res) {
  CenterModel
    .findById((req.params.id))
    .find('opinion')
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function addOpinion (req, res) {
  const opinionId = req.body.newOpinion
  CenterModel
    .find('opinion')
    .then(listOpinions => listOpinions.push(opinionId))
  listOpinions.save()
    .catch((err) => handleError(err, res))
}
