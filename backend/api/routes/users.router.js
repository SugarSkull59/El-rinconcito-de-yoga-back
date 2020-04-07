const router = require('express').Router()

const {
  getUser,
  updateUser,
  deleteUser,
  getFavourites,
  addFavourites,
  deleteFavourite
} = require('../controllers/users.controller')

router.get('/:userId', getUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.get('/:userId/favourite', getFavourites)
router.post('/:userId/favourites', addFavourites)
router.delete('/:userId/favourites/:centerId', deleteFavourite)

module.exports = router
