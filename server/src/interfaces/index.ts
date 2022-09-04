import { Request } from 'express';
import { IUser } from '../entity/user';

export interface IRequestExtended extends Request{
    user?: IUser;
}
export interface ITokenDataToSave {
    refreshToken?: string;
    accessToken?: string;
    userId?: number;
}
export interface ITokenPair {
    accessToken: string;
    refreshToken: string;
}

export interface IUserPayload {
    userId?: number,
    userEmail?: string,
}
export interface ITokenActivate {
    activateToken: string;
}

export type ITokenData = ITokenPair & IUserPayload;
