const router = require('express').Router()

const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const centersRouter = require('./centers.router')

const {
  authUser
} = require('../utils') // Authenticated Route

router.use('/auth', authRouter)
router.use('/users', authUser, usersRouter)
router.use('/centers', centersRouter)

router.get('/whoami', authUser, (req, res) => {
  res.send(`hi there! ${res.locals.user.name}`)
})

module.exports = router
