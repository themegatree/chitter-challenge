const express = require('express')
const router = express.Router({mergeParams: true})
const { Post } = require('../models')
const { User } = require('../models')
const bcrypt = require('bcryptjs');
const user = require('../models/user');

router.post('/', async (req, res) => {

    const user = await User.findOne({where: {id: req.session.userId}})

    const post = await Post.create({
        message: req.body.post,
        userId: req.session.userId,
        username: user.username
    })


    res.redirect('/')
})

module.exports = router