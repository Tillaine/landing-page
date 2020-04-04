const { carBatch } = require('../fakeCar.js')

console.log('cars from addcars seed', carBatch(10))

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert(carBatch(200000));
    });
};
