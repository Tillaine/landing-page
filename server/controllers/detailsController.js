const model = require('../models/detailsModel');

const getAllDetails = (req, res, next) => {
  console.log(model.getAllDetails)
  model.getAllDetails(req.query.term)
  .then(details => {
    console.log(details)
    res.send(details)
  
  })
  .then()
  .catch(err => console.log('err from db', err))
}


module.exports = { getAllDetails }
