import { InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { Request } from 'express';

export interface IUser extends Model
    <InferAttributes<IUser>, InferCreationAttributes<IUser>> {
        id: number;
        email: string;
        password: string;
        name: string;
        age: number;
        activateToken?: string;
        is_active: boolean;
        is_staff: boolean;
        is_superuser: boolean;
        statistic: boolean;
}
export interface IToken extends Model
    <InferAttributes<IToken>, InferCreationAttributes<IToken>> {
        refreshToken: string;
        accessToken: string;
        userId: number;
        id: number;
}
export interface IStatistic extends Model
    <InferAttributes<IStatistic>, InferCreationAttributes<IStatistic>> {
        id: number;
        howDidYouKnow: string;
        whatAreYouStuding: string;
        everyDayTarget: string;
        userId: number;
}
export interface IRequestExtended extends Request{
    user?: IUser;
}

export interface ITokenActivate {
    activateToken: string;
}

export interface IUserPayload {
    userId: number;
    userEmail: string;
}

export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
    userId: number;
}
export interface ITokenActivateAndName {
    activateToken: string;
    userName?: string;
}