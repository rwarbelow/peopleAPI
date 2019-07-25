'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [
        { name: 'rachel', nickname: 'shelly', birthyear: 1986, createdAt: new Date(), updatedAt: new Date() },
        { name: 'mike dao', nickname: 'dao', birthyear: 1775, createdAt: new Date(), updatedAt: new Date() },
        { name: 'leta', nickname: 'lele', birthyear: 1987, createdAt: new Date(), updatedAt: new Date() },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  }
};
