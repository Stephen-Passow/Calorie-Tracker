const express = require('express')

const excersizeApi = require('../models/excersize.js')

const excersizeRouter = express.Router()

//all activities
excersizeRouter.get('/excersize', (req, res) => {
  excersizeApi.getAllExcersize()
    .then((allExcersize) => {
        console.log('allExcersize', allExcersize)
      res.json(allExcersize)
    })
})

//get excersizes by specified id
// excersizeRouter.get('/excersize/:id', (req, res) => {
//   excersizeApi.getExcersizeByType(req.params.id)
//     .then((excersizeByType) => {
//         console.log('excersizeByType', excersizeByType)
//       res.json(excersizeByType)
//     })
// })


//single excersize
excersizeRouter.get('/excersize/:id', (req, res) => {
  excersizeApi.getSingleExcersize(req.params.id)
    .then((singleExcersize) => {
        console.log('singleExcersize', singleExcersize)
    res.json(singleExcersize)
  })
})

//create excersize
excersizeRouter.post('/excersize', (req, res) => {
  excersizeApi.createExcersize(req.body)
  .then((newExcersize) => {
      console.log('newExcersize',newExcersize)
    res.json(newExcersize)
  })
})

//update excersize
excersizeRouter.put('/excersize/:id', (req, res) => {
  excersizeApi.updateExcersize(req.params.id, req.body)
  .then((updatedExcersize) => {
      console.log('updatedExcersize', updatedExcersize)
    res.json(updatedExcersize)
  })
})

//delete excersize
excersizeRouter.delete('/excersize/:id', (req, res) => {
  excersizeApi.deleteExcersize(req.params.id)
  .then((deletedExcersize) => {
      console.log(deletedExcersize,'deletedExcersize')
    res.json(deletedExcersize)
  })
})

module.exports = {
  excersizeRouter
}