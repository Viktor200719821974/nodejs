// 'use strict';
// const {
//   Model
// } = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//   class Token extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Token.init({
//     accessToken: DataTypes.STRING,
//     refreshToken: DataTypes.STRING,
//     userId: DataTypes.NUMBER
//   }, {
//     sequelize,
//     modelName: 'Token',
//   });
//   return Token;
// };
const { DataTypes } = require('sequelize');

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
  //   console.log(models);
  //   Token.belongsTo(models.User, {
  //     as: 'user',
  //     forenKey: 'userId'
  //   });
  // };
  // Token.associate();
  return Token;
};