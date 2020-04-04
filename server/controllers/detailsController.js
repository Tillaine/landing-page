const model = require('../models/detailsModel');

const getAllDetails = (req, res, next) => {
  model.getAllDetails(req.query.term)
  .then(details => {
    console.log('get' , details)
    res.send(details)
  
  })
  .then()
  .catch(err => console.log('err from db', err))
}

const postDetails = (req, res) => {
  model.modelDetails(req.body)
  .then(details => {
    console.log(details)
  })
  res.send('created')
}

const addManyCars = (req, res) => {
  model.addManyCars(req.body)
  .then(details => {
    console.log(details)
  })
  res.send('created')
}


const updateDetails = (req, res) => {
  model.updateDetails(req.body)
  .then(details => {
    console.log(details)
  })
  res.send('updated')
}

const deleteDetails = (req, res) => {
  model.deleteDetails(req.query.id)
  .then(details => {
    console.log(details)
    res.send(204)
  })
  .catch(err => console.log('err from db:', err))
}

module.exports = { getAllDetails, postDetails, updateDetails, deleteDetails, addManyCars }
