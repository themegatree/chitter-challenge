const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
const bcrypt = require('bcryptjs')

router.post('/', async (req, res) => {
  const user = await User.findOne({where:{username: req.body.username}})

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    req.session.userId = user.id
    res.redirect('/')
  }
  else {
    res.redirect("/")
  }
})

router.delete('/', (req, res) => {
  req.session.userId = undefined
  res.redirect('/')
})

module.exports = router