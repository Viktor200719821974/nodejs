import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';

export interface IUser extends Model<InferAttributes<IUser>, InferCreationAttributes<IUser>>{
    id: number;
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    age: number;
    activateToken: string;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
}
export interface IToken extends Model<InferAttributes<IToken>, InferCreationAttributes<IToken>>{
    refreshToken: string;
    accessToken: string;
    userId: number;
    id: number;
}

export interface IRequestExtended extends Request{
    user?: IUser;
}