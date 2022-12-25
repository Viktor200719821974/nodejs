'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name:{ type: DataTypes.STRING, defaultValue: 'noName' },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    age: { type: DataTypes.INTEGER },
    activateToken: { type: DataTypes.STRING, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    is_staff: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
    is_superuser: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};