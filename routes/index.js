const express = require('express')
const router = express.Router({mergeParams: true})

const { User } = require('../models')
const { Post } = require('../models')

router.get("/", async (req,res) => {

    const chitters = await Post.findAll({order: [['createdAt', 'DESC']]})

    if (req.session.userId !== undefined) {
        const user = await User.findOne({where: {id: req.session.userId}})
        res.render("index.ejs", {
            user:user,
            chitters:chitters
        })
    }

    else{
        res.render("index.ejs", {
            user:undefined,
            chitters:chitters
        })
    }
})

module.exports = router