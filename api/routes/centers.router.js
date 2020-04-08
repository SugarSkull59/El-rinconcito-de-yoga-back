const router = require('express').Router()

const {
  getAllCenters,
  getCenter,
  getAllOpinions,
  addOpinion
} = require('../controllers/center.controller')

const {
  authUser
} = require('../utils') // Authenticated Route

router.get('/', getAllCenters)
router.get('/:centerId', getCenter)
router.get('/:centerId/opinions', authUser, getAllOpinions)
router.post('/:centerId/opinions', authUser, addOpinion)

module.exports = router
