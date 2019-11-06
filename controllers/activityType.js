const express = require('express')

const activityTypeApi = require('../models/activityType.js')

const activityTypeRouter = express.Router()

//all activities
activityTypeRouter.get('/activityType', (req, res) => {
  activityTypeApi.getAllActivitity()
    .then((allActivity) => {
      res.json(allActivity)
    })
})

//single activity
activityTypeRouter.get('/activityType/:id', (req, res) => {
  activityTypeApi.getAllActivitity(req.params.id)
    .then((singleActivity) => {
    res.json(singleActivity)
  })
})

//create activity
activityTypeRouter.post('/activityType', (res, res) => {
  activityTypeApi.createActivity(req.body)
  .then((newActivity) => {
    res.json(newActivity)
  })
})

//update activity
activityTypeRouter.put('/activityType', (req, res) => {
  activityTypeApi.updateActivity(req.body, req.params.id)
  .then((updatedActivity) => {
    res.json(updatedActivity)
  })
})

//delete activity
activityTypeRouter.delete('/activityType', (req, res) => {
  activityTypeApi.deleteActivity(req.params.id)
  .then((deletedActivity) => {
    res.json(deletedActivity)
  })
})

module.exports = {
  activityTypeRouter
}