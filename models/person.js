'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    birthyear: DataTypes.INTEGER
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};