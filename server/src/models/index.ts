import { DataTypes } from 'sequelize';

import { sequelize } from '../db';
import { IToken, IUser, IStatistic, } from '../interfaces';

const User = sequelize.define<IUser>('User', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true,
    },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: true, defaultValue: 'Anonymus' },
    age: { type: DataTypes.INTEGER },
    activateToken: { type: DataTypes.STRING, allowNull: true },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    is_staff: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
    is_superuser: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    statistic: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
});
const Token = sequelize.define<IToken>('Token', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    accessToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    refreshToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
});
const Statistic = sequelize.define<IStatistic>('Statistic', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    howDidYouKnow: { 
        type: DataTypes.STRING, allowNull: false 
    },
    whatAreYouStuding: { 
        type: DataTypes.STRING, allowNull: false 
    },
    everyDayTarget: { 
        type: DataTypes.STRING, allowNull: false
    },
    userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' } },
});
// User.hasOne(Token);
Token.belongsTo(User, { foreignKey: 'userId' });
Statistic.belongsTo(User, { foreignKey: 'userId' });

export const model = {
    User,
    Token,
    Statistic,
}
