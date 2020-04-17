const model = require('../models/detailsModel');
const redis = require('redis');
const client = redis.createClient();

// Print redis errors to the console
client.on('error', (err) => {
    console.log("Error " + err);
  });

//for mongo wrap details in [] before sending
const getAllDetails = (req, res, next) => {
  const term = req.query.term;
  return client.get(`carID:${term}`, (err, result) => {
    // If that key exist in Redis store
    if (result) { 
      let details = JSON.parse(result);

      console.log('details, ', details.results)
      res.send(details.details);
    } else {
    model.getCarPg(req.query.term)
    // model.getOneCar(req.query.term)
    .then(details => {
      client.setex(`carID:${term}`, 3600, JSON.stringify({ source: 'Redis Cache', details }));
      res.send(details)
  
    })
    .then()
    .catch(err => console.log('err from db', err))
    }
  })
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
    model.findById(id)
    .then(updatedCar => {
      res.send(updatedCar)})
      .catch(err => console.log('db err', err))
  })
  .catch(err => console.log('db err', err))
  
}

const deleteDetails = (req, res) => {
  model.deleteDetails(req.query.id)
  .then(details => {
    res.send(204)
  })
  .catch(err => console.log('err from db:', err))
}

module.exports = { getAllDetails, postDetails, updateDetails, deleteDetails, addManyCars }
