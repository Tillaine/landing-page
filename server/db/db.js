const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cars');

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


let addManyCars = (cars) => {
    
    return new Promise((resolve, reject) => {
        Car.collection.insertMany(cars, (err, docs) => {
            if(err) { reject(err) }
            else {resolve (docs.length, 'added')}
        })

    })
}


  let addCar = (car) => {
    
    let newCar = new Car(car);
    return new Promise((resolve, reject) => {
         newCar.save((err) => {
           if(err) {reject (err)}
           else { resolve (newCar) }
         })


    })
  
  
}

let getCar = () => {
return new Promise((resolve, reject) => {

    Car.find((err, Car) => {
      if (err) {reject(err)}
      else {
        resolve(Car)
    }
  })
})

}

module.exports = {addManyCars, getCar, addCar}


