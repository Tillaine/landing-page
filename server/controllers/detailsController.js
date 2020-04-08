const model = require('../models/detailsModel');
//for mongo wrap details in [] before sending
const getAllDetails = (req, res, next) => {
  model.getCarPg(req.query.term)
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
  const id = req.body.id
  model.updateMongo(req.body, req.body.id)
  .then(details => {
    console.log('details after update', details)
    model.findById(id)
    .then(updatedCar => {
      console.log('updated car', updatedCar)
      res.send(updatedCar)})
      .catch(err => console.log('db err', err))
  })
  .catch(err => console.log('db err', err))
  
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
