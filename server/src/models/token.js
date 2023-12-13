'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        as: 'user',
        forenKey: 'userId'
      });
    }
  }
  Token.init({
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
    }
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};
// const { DataTypes, Model } = require('sequelize');

// const db = require('../models');
// const sequelize = require('../db');
// // console.log(sequelize);
// // module.exports = (sequelize, DataTypes) => {
//   const Token = sequelize.define("Tokens",{
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false
//     },
//     accessToken: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     refreshToken: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     }, 
//   });
  // Token.associate = (models) => {
  //   console.log(models);
  //   Token.belongsTo(models.User, {
  //     as: 'user',
  //     forenKey: 'userId'
  //   });
  // };
  // Token.associate(db);
//   return Token;
// };
// module.exports = Token;
// const { DataTypes } = require('sequelize');
// const sequelize = require('../db');

// const Token = sequelize.define("Tokens",{
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false
//   },
//   accessToken: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   refreshToken: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   userId: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   }, 
// });

// module.exports = Token;