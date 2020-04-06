const { carBatch } = require('../fakeCar.js')

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  knex('cars').del()
  for(let i = 0; i<10000; i++){
    await knex('cars').insert(carBatch(1000));
    }
    console.log('done')
};
