const express = require('express')
const router = express.Router({mergeParams: true})
const { Post } = require('../models')
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {

    const post = await Post.create({
        message: req.body.post,
        userId: req.session.userId
    })


    res.redirect('/')
})

module.exports = router