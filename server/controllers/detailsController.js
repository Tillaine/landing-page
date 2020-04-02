const model = require('../models/detailsModel');

const getAllDetails = (req, res, next) => {
  model.getAllDetails(req.query.term)
  .then(details => {
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
  res.send(created)
}
module.exports = { getAllDetails, postDetails }
