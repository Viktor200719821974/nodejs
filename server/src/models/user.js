// const { DataTypes } = require('sequelize');

// const db = require('../models');

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("Users",{
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false
//     },
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       validate: {
//         isEmail: true
//       },
//       allowNull: false
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     }
//   });
//   // User.associate = (models) => {
//   //   User.hasOne(models.Token, {
//   //     as: 'tokens',
//   //     forenKey: 'userId'
//   //   })
//   // };
//   // console.log(db);
//   // User.associate(db);
//   // User.init({
//   //   firstName: DataTypes.STRING,
//   //   lastName: DataTypes.STRING,
//   //   email: DataTypes.STRING
//   // }, {
//   //   sequelize,
//   //   modelName: 'User',
//   // });
//   return User;
// };
'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Token, {
        as: 'tokens',
        forenKey: 'userId'
      });
    }
  }
  User.init({
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
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};