exports.up = function(knex) {
    return Promise.all([
      knex.schema.createTable('cars', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.integer('price');
        table.string('engine');
        table.string('color');
        table.string('MPG');
        table.string('feature_one');
        table.string('feature_two');
        table.string('feature_three');
        table.string('feature_five');
        table.string('feature_six');
      })
    ]);
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTable('cars')
    ]);
  };

 