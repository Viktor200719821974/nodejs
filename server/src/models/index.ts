import { DataTypes } from 'sequelize';

import { sequelize } from '../db';
import { IToken, IUser } from '../interfaces';

const User = sequelize.define<IUser>('User', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true,
    },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    surname: { type: DataTypes.STRING },
    age: { type: DataTypes.INTEGER },
    phone: { type: DataTypes.STRING },
    activateToken: { type: DataTypes.STRING, defaultValue: 'No activate' },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: 'false' },
    is_staff: { type: DataTypes.BOOLEAN, defaultValue: 'false' },
    is_superuser: { type: DataTypes.BOOLEAN, defaultValue: 'false' },
});
const Token = sequelize.define<IToken>('Token', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false,
    },
    accessToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    refreshToken: { type: DataTypes.STRING, unique: true, allowNull: false },
    userId: { type: DataTypes.INTEGER },
});

User.hasOne(Token);
Token.belongsTo(User);

export const model = {
    User,
    Token,
}
