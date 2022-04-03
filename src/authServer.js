require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

app.post('/login', (req, res) => {
  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  res.json({ accessToken: accessToken })
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}

app.listen(process.env.AUTH_SERVER_PORT | 4000)
