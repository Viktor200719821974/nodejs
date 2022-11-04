'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Token.init({
    accessToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    refreshToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: {
      model: {
        tableName: 'Users',
      },
      key: 'id'
    }, }
  }, {
    sequelize,
    modelName: 'Token',
  });
  return Token;
};