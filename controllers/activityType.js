const express = require('express')

const activityTypeApi = require('../models/activityType.js')

const activityTypeRouter = express.Router()

//all activities
activityTypeRouter.get('/activityType', (req, res) => {
  activityTypeApi.getAllActivity()
    .then((allActivity) => {
      console.log('allActivity', allActivity)
      res.json(allActivity)
    })
})

//single activity
activityTypeRouter.get('/activityType/:id', (req, res) => {
  activityTypeApi.getAllActivity(req.params.id)
    .then((singleActivity) => {
      console.log('singleActivity', singleActivity)
    res.json(singleActivity)
  })
})

//create activity
activityTypeRouter.post('/activityType', (req, res) => {
  activityTypeApi.createActivity(req.body)
  .then((newActivity) => {
    console.log('newActivity', newActivity)
    res.json(newActivity)
  })
})

//update activity
activityTypeRouter.put('/activityType/:id', (req, res) => {
  activityTypeApi.updateActivity(req.params.id, req.body)
  .then((updatedActivity) => {
    console.log('updatedActivity', updatedActivity)
    res.json(updatedActivity)
  })
})

//delete activity
activityTypeRouter.delete('/activityType/:id', (req, res) => {
  activityTypeApi.deleteActivity(req.params.id)
  .then((deletedActivity) => {
    console.log('deletedActivity', deletedActivity)
    res.json(deletedActivity)
  })
})

module.exports = {
  activityTypeRouter
}