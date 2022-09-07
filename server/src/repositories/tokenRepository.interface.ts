import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtPayload } from 'jsonwebtoken';
import { ITokenActivate, ITokenDataToSave, IUserPayload } from '../interfaces';
import { Token } from '../entity/token';

export interface ITokenRepository {
    generateTokenActivate(payload: IUserPayload):Promise<ITokenActivate>;
    generateTokenPair(payload: IUserPayload):Promise<ITokenDataToSave>;
    saveTokenActivate(id: number, activateToken: string): Promise<UpdateResult>;
    saveToken(tokenPair: ITokenDataToSave): Promise<ITokenDataToSave>;
    deleteUserTokenPair(userId: number): Promise<DeleteResult>;
    findTokenRefresh(refreshToken: string | undefined): Promise<Token | undefined>;
    verifyToken(authToken: string, tokenType: string): Promise<JwtPayload | string>;
    findByParamsAccess(accessToken: string): Promise<Token | undefined>;
    findByParamsRefresh(refreshToken: string): Promise<Token | undefined>;
}
