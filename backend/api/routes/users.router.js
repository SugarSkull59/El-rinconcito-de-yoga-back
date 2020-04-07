const router = require('express').Router()

const {
  getUser,
  updateUser,
  deleteUser,
  getFavourites,
  addFavourites,
  deleteFavourite
} = require('../controllers/users.controller')

router.get('/users/:userId', getUser)
router.put('/users/:userId', updateUser)
router.delete('/users/:userId', deleteUser)
router.get('users/:userId/favourite',getFavourites)
router.post('/users/:userId/favourites', addFavourites)
router.delete('/users/:userId/favourites/:centerId', deleteFavourite)


module.exports = router
