import bcrypt from 'bcrypt';

import { config } from '../config';
import { ITokenActivate, ITokenPair, IUser } from '../interfaces';
import { model } from '../models';
import { tokenService } from './tokenService';

class AuthService {
    async registration(user: IUser, password: string, userEmail: string): Promise<ITokenActivate> 
    {
        if (user.name === '') {
            user.name = 'noName';
        }
        const hashedPassword = await AuthService._hashPassword(password);
        const id = await model.User.create({...user, password: hashedPassword})
        .then(data => data.id);
        const tokenActivate = await tokenService.generateTokenActivate({ userId: id, userEmail });
        await model.User.update(
            {
                 activateToken: tokenActivate.activateToken 
            }, 
            {
                 where: { id }
            });
        return tokenActivate;
    }

    async login(userEmail: string, userId: number): Promise<ITokenPair> {
        const { accessToken, refreshToken } = await tokenService.generateTokenPair({ userId, userEmail });
        const exists = await model.Token.findOne({ where: { userId } });
        if (exists) {
            await tokenService.deleteTokenPair(userId);
        }
        // @ts-ignore
        await tokenService.saveToken({ accessToken, refreshToken, userId });
        return { accessToken, refreshToken, userId };
    }

    async logout() {

    }

    async refresh() {
        
    }

    private static async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, Number(config.USER_SALT_ROUNDS));
    }
}

export const authService = new AuthService();