const { User } = require('../models')
const bcrypt = require('bcryptjs')

const createTestUser = async () => {
  const hash = bcrypt.hashSync("password")
  await User.create({
    username: "dummy001",
    passwordHash: hash,
  })
}

module.exports = createTestUser