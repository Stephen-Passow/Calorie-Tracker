const express = require('express')

const excersizeApi = require('../models/excersize.js')

const excersizeRouter = express.Router()

//all activities
excersizeRouter.get('/excersize', (req, res) => {
  excersizeApi.getAllExcersize()
    .then((allExcersize) => {
      res.json(allExcersize)
    })
})

//single excersize
excersizeRouter.get('/excersize/:id', (req, res) => {
  excersizeApi.getSingleExcersize(req.params.id)
    .then((singleExcersize) => {
    res.json(singleExcersize)
  })
})

//create excersize
excersizeRouter.post('/excersize', (res, res) => {
  excersizeApi.createExcersize(req.body)
  .then((newExcersize) => {
    res.json(newExcersize)
  })
})

//update excersize
excersizeRouter.put('/excersize', (req, res) => {
  excersizeApi.updateExcersize(req.body, req.params.id)
  .then((updatedExcersize) => {
    res.json(updatedExcersize)
  })
})

//delete excersize
excersizeRouter.delete('/excersize', (req, res) => {
  excersizeApi.deleteExcersize(req.params.id)
  .then((deletedExcersize) => {
    res.json(deletedExcersize)
  })
})

module.exports = {
  excersizeRouter
}