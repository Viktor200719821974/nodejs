import jwt, { JwtPayload } from 'jsonwebtoken';

import { IToken, ITokenActivate, ITokenPair, IUserPayload } from '../interfaces';
import { config } from '../config';
import { model } from '../models';


class TokenService {
    async generateTokenActivate(payload: IUserPayload):Promise<ITokenActivate> {
        const activateToken = jwt.sign(
            payload,
            config.SECRET_ACTIVATE_KEY!,
            { expiresIn: '48h' },
        );
        return { activateToken };
    }

    async generateTokenPair(payload: IUserPayload): Promise<ITokenPair> {
        const accessToken = jwt.sign(
            payload,
            config.SECRET_ACCESS_KEY!,
            { expiresIn: '1m' },
        );
        const refreshToken = jwt.sign(
            payload,
            config.SECRET_REFRESH_KEY!,
            { expiresIn: '2m' },
        )
        return { accessToken, refreshToken, userId: payload.userId};
    }

    async saveToken(tokens: IToken): Promise<void> {
        await model.Token.create(tokens);
    }

    async verifyToken(authToken: string, tokenType = 'accessToken'): Promise<JwtPayload | string> {
        let secretWord = config.SECRET_ACCESS_KEY;
        if (tokenType === 'refreshToken') {
            secretWord = config.SECRET_REFRESH_KEY;
        }
        if (tokenType === 'activateToken') {
            secretWord = config.SECRET_ACTIVATE_KEY;
        }
        return jwt.verify(authToken, secretWord);
    }

    async findByParamsToken(token: string): Promise<boolean> {
        return !!model.Token.findOne({ where: { accessToken: token } });
    }

    async findByParamsActivateToken(activateToken: string | undefined): Promise<boolean> {    
        return !!model.User.findOne({ where: { activateToken } });
    }

    async deleteTokenPair(userId: number): Promise<void> {
        await model.Token.destroy({ where: { userId } });
    }
}

export const tokenService = new TokenService();