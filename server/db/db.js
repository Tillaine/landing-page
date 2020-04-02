const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fetcher');

const connection = mongoose.connection;

connection.once('open', function() {
  console.log('db connected!')
});
connection.on('error', console.error.bind(console, 'connection error:'));

let carModel = new mongoose.Schema({
    id: Number,
    cost: Number,
    name: String,
    engine: String,
    color: String,
    MPG: String,
    mileage: Number,
    feature_one: String,
    feature_two: String,
    feature_three: String,
    feature_four: String,
    feature_five: String,
    feature_six: String 
});


let Car = mongoose.model('Car', carModel);


let addCar = (cars) => {
  cars.forEach(car => {
   let newCar = new Car(car);
    newModel.save((err) => {
      if(err) {return console.log('save err', err)}
      else { return newCar }
    })

  })

}

let getCar = () => {
return new Promise((resolve, reject) => {

    Repo.find((err, Car) => {
      if (err) {reject(err)}
      else {
        resolve(Car)
    }
  })
})

}

module.exports.save = addCar;
module.exports.getRepos = getCar;

