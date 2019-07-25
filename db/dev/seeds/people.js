exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(() => {
      // Inserts seed entries
      return knex('people').insert([
        { id: 1, name: 'rachel', nickname: 'shelly', birthyear: 1986 },
        { id: 2, name: 'mike dao', nickname: 'dao', birthyear: 1775 },
        { id: 3, name: 'leta', nickname: 'lele', birthyear: 1987 },
      ]);
    });
};
