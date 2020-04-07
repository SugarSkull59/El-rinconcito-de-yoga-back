const UserModel = require('../models/users.model')
const {
  handleError
} = require('../utils')

module.exports = {
  getUser,
  updateUser,
  deleteUser,
  getFavourites,
  addFavourites,
  deleteFavourite
}

function getUser (req, res) {
  UserModel
    .findById((req.params.userId))
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUser (req, res) {
  UserModel
    .findByIdAndRemove(req.params.userId)
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function getFavourites (req, res) {
  UserModel
    .findById(req.params.userId)
    .then(user => res.json(user.favourite_centers))
    .catch((err) => handleError(err, res))
}

function addFavourites (req, res) {
  const centerId = req.body.newCenter
  UserModel
    .findById(req.params.userId)
    .then(user => {
      user.favourite_centers.push(centerId)
      user.save()})
    .catch((err) => handleError(err, res))
}

function deleteFavourite (req, res) {
  UserModel
    .findById(req.params.userId)
    .then(user => res.json(
      user.favourite_centers.slice(
        user.favourite_centers.indexOf(req.params.centerId), 1)))
    .catch(err => handleError(err, res))
}
