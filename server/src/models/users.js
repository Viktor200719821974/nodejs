const { DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("Users",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      },
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // User.associate = (models) => {
  //   User.hasOne(models.Token, {
  //     as: 'tokens',
  //     forenKey: 'userId'
  //   })
  // };
  // User.init({
  //   firstName: DataTypes.STRING,
  //   lastName: DataTypes.STRING,
  //   email: DataTypes.STRING
  // }, {
  //   sequelize,
  //   modelName: 'User',
  // });
  return User;
};