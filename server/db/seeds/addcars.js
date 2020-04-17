const { carBatch } = require('../fakeCar.js')

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  // knex('cars').del()
  for(let i = 0; i<100000; i++){
    await knex('cars').insert(carBatch(100));
    }
    console.log('done')
};
