const router = require('express').Router()

const {
  getAllCenters,
  getCenter,
  getAllOpinions,
  addOpinion
} = require('../controllers/center.controller')

router.get('/centers', getAllCenters)
router.get('/centers/:centerId', getCenter)
router.get('/centers/:centerId/opinions', getAllOpinions)
router.post('/centers/:centerId/opinions', addOpinion)

module.exports = router
