const model = require('../models/detailsModel');
var redisPool = require('redis-connection-pool')('myRedisPool', {
  host: '127.0.0.1', // default
  port: 6379, //default
  // optionally specify full redis url, overrides host + port properties
  // url: "redis://username:password@host:port"
  max_clients: 100, // defalut
  perform_checks: false, // checks for needed push/pop functionality
  database: 0, // database number to use
  options: {
    auth_pass: 'password'
  } //options for createClient of node-redis, optional
});

redisPool.set('test-key', 'foobar', function (err) {
redisPool.get('test-key', function (err, reply) {
  console.log(reply); // 'foobar'
});
});


//for mongo wrap details in [] before sending
const getAllDetails = (req, res, next) => {
  const term = req.query.term;
  return redisPool.get(`carID:${term}`, (err, result) => {
    // If that key exist in Redis store
    if (result) { 
      let details = JSON.parse(result);

      console.log('details, ', result)
      res.send(details.details);
    } else {
    // model.getCarPg(req.query.term)
    model.getOneCar(req.query.term)
    .then(details => {
      redisPool.set(`carID:${term}`, JSON.stringify({ source: 'Redis Cache', details }));
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
