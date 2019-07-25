exports.up = (knex) => {
  return Promise.all([
    knex.schema.createTable('people', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('nickname');
      table.integer('birthyear');
      table.timestamps(true, true);
    })
  ])
};

exports.down = (knex) => {
  return Promise.all([
    knex.schema.dropTable('people')
  ])
};
