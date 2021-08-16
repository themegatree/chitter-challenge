const express = require('express')
const router = express.Router({mergeParams: true})
const { User } = require('../models')

router.post("/", async(req,res) => {
    req.session.userId = undefined;
    res.redirect("/");
})

module.exports = router