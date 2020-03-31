const connection = require('../db/connection.js');

const getAllDetails = callback => {
  const queryString = `SELECT * FROM venicle WHERE id='1'`;

  connection.query(queryString, (error, results, fields) => {
    if (error) {
      console.log(error);
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { getAllDetails };
