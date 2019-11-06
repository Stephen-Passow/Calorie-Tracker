
const express = require('express')

const templateApi = require('../models/activityType.js')

const templateRouter = express.Router()

templateRouter.get('/', (req, res) => {
  res.json(templateApi.getHelloWorldString())
})

module.exports = {
  activityTypeRouter
}