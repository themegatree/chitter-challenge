const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')
const bcrypt = require('bcryptjs');

router.get("/", (req, res) => {
  res.render("register.ejs")
})

router.post('/', async (req, res) => {

  const user= await User.create({
    username: req.body.username,
    passwordHash: bcrypt.hashSync(req.body.password)
  })

  req.session.userId = user.id
    res.redirect('/')
})

module.exports = router