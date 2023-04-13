'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Statistic.init({
    howDidYouKnow: { type: DataTypes.STRING, allowNull: false },
    whatAreYouStuding: { type: DataTypes.STRING, allowNull: false },
    everyDayTarget: { type: DataTypes.STRING, allowNull: false },
    userId: {type: DataTypes.INTEGER, allowNull: false, references: {
      model: {
        tableName: 'Users'
      },
      key: 'id',      
    }}
  }, {
    sequelize,
    modelName: 'Statistic',
  });
  return Statistic;
};