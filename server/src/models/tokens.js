const { DataTypes } = require('sequelize');

// const models = require("../models");

module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define("Tokens",{
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    accessToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
  });
  // Token.associate = (models) => {
    // Token.belongsTo(models.User, {
    //   as: 'user',
    //   forenKey: 'userId'
    // })
  // };
  return Token;
};
// Token.belongsTo(User, {
//   onDelete: 'cascade',
//   foreignKey: {
//     field: 'userId',
//     allowNull: false,
//   }
// });