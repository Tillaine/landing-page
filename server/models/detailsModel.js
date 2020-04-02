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


module.exports = { getAllDetails };
