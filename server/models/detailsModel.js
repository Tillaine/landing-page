const connection = require('../db/connection.js');
const mongo = require('../db/db.js')
const pg = require('../db/postgresDB.js')


// ************************
//  mysql
// ************************
const getAllDetails = (carId) => {
  const queryString = `SELECT * FROM venicle WHERE id="${1}"`;
 return new Promise((resolve, reject) => {
   connection.query(queryString, (err, details) => {
    if (err) { reject(err) }
    else { resolve(details) }
})
 })
};



const xmodelDetails = (details) => {
  const {cost, name, engine, color, MPG, mileage, feature_one, feature_two, feature_three, feature_four, feature_five, feature_six} = details;
  const queryString = `INSERT INTO venicle (cost, name, engine, color, MPG, mileage, feature_one, feature_two, feature_three, feature_four, feature_five, feature_six)
  VALUES ("${cost}", "${name}", "${engine}", "${color}", "${MPG}", "${mileage}", "${feature_one}", "${feature_two}", "${feature_three}", "${feature_four}", "${feature_five}", "${feature_six}")`;
 return new Promise((resolve, reject) => {
   connection.query(queryString, (err, details) => {
    if (err) { reject(err) }
    else { resolve(details) }
})
 })
};

const updateDetails = (updates) => {
  let queryString = `UPDATE venicle SET `;
  for(let i in updates) {
    queryString += `${i} = "${updates[i]}", ` 
  }
   queryString = queryString.slice(0, queryString.length -2)
 queryString += ` WHERE id='11'`;
 console.log('queryString', queryString)

 return new Promise((resolve, reject) => {
   connection.query(queryString, (err, details) => {
    if (err) { reject(err) }
    else { resolve(details) }
})
 })
};

const deleteDetails = (carId) => {
  const queryString = `DELETE FROM venicle WHERE id='${carId}'`;
 return new Promise((resolve, reject) => {
   connection.query(queryString, (err, details) => {
    if (err) { reject(err) }
    else { resolve(details) }
})
 })
};


// ************************
// Mongo
// ************************

const getOneCar = (carId) => {
  return mongo.findById(carId);
};

const addManyCars = (cars) => {
  return mongo.addManyCars(cars)
    console.log(mongo) 
};

const modelDetails = (car) => {
  
  return mongo.addCar(car)
    console.log(mongo) 
    

 
};

const updateMongo = (updates) => {
  id = updates.id;
  delete updates.id;
 return mongo.updateMongo(updates, id)

};

const findById = (id) => {
  console.log(id)
return mongo.findById(id);

}


const deleteMongo = (carId) => {
  mongo.deleteCar(carId)
};

// ************************
// postgres
// ************************

const getCarPg = (id) => {
  
  return pg.getCarPostgres(id)
    

  }
 
const updatePG = (id, updates) => {

  return pg.updatePg()
  
  

}


module.exports = { updatePG, getCarPg, deleteMongo, findById, getOneCar, modelDetails, updateDetails, deleteDetails, addManyCars, updateMongo };


// ************************
// test Data Mongo 
// ************************

// update
// {
//     "id": 7,
//   "color": "Grapefruit",
//   "price": 4286,
//   "feature_one": "pay phone",
// }


// add one
// { "id": "98",
//   "cost": 24000,
//   "name": "SexyBeast",
//   "engine": "1.5L I-4 Cyl",
//   "color": "Pulse",
//   "MPG": "32 mpg City 40 mpg Hwy",
//   "mileage": 33886,
//   "feature_one": "Wireless phone connectivity",
//   "feature_two": "Split folding rear seat",
//   "feature_three": "Steering wheel mounted audio controls",
//   "feature_four": "Exterior parking camera rear",
//   "feature_five": "Remote keyless entry",
//   "feature_six": "Alloy wheels" }

const ids = ["5e8cfff5a4f4160aa62c3728", "5e8cfff5a4f4160aa62c3732", "5e8cfff5a4f4160aa62c3733", "5e8cfff5a4f4160aa62c3734", "5e8cfff5a4f4160aa62c3735", "5e8cfff5a4f4160aa62c3736", "5e8cfff5a4f4160aa62c373a", "5e8cfff5a4f4160aa62c373b", "5e8cfff5a4f4160aa62c3739", "5e8cfff5a4f4160aa62c3738"]