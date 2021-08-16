const { User } = require('../models')
const { Post } = require('../models')

const truncateTables = () => {
  console.log('truncating tables')
  User.destroy({ truncate: true, cascade: true })
  Post.destroy({ truncate: true, cascade: true })
}

module.exports = truncateTables