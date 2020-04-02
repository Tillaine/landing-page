const connection = require('../db/connection.js');

const getAllDetails = (carId) => {
  const queryString = `SELECT * FROM venicle WHERE id="${1}"`;
 return new Promise((resolve, reject) => {
   connection.query(queryString, (err, details) => {
    if (err) { reject(err) }
    else { resolve(details) }
})
 })
};

const modelDetails = (details) => {
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





module.exports = { getAllDetails, modelDetails };
