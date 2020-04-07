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


function getUser(req, res) {
  UserModel
    .findById((req.params.id))
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function updateUser(req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUser(req, res) {
  UserModel
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}


function getFavourites(req, res) {
  UserModel
    .find("favourite_centers")
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function addFavourites(req, res) {
  const centerId = req.body.newCenter
  UserModel
    .find("favourite_centers")
    .then(listFavourite => listFavourite.push(centerId))
  listFavourite.save()
    .catch((err) => handleError(err, res))
}

function deleteFavourite(req, res) {
  UserModel
    .find("favourite_centers")
    .remove({
      _id: req.params.id
    })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}
