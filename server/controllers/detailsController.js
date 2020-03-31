const model = require('../models/detailsModel');

const getAllDetails = (req, res, next) => {
  model.getAllDetails((error, results) => {
    if (error) {
      return res.status(400).send(error);
    }
    res.status(201).json({ details: results });
  });
};

module.exports = { getAllDetails };
