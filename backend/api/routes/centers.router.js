const router = require('express').Router()

const {
  getAllCenters,
  getCenter,
  getAllOpinions,
  addOpinion
} = require('../controllers/center.controller')

router.get('/', getAllCenters)
router.get('/:centerId', getCenter)
router.get('/:centerId/opinions', getAllOpinions)
router.post('/:centerId/opinions', addOpinion)

module.exports = router
