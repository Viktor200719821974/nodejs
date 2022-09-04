import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { EntityRepository, getManager, UpdateResult } from 'typeorm';
import { ITokenPair, IUserPayload, ITokenActivate } from '../interfaces';
import { User } from '../entity/user';
import { Token } from '../entity/tokens';

dotenv.config();

@EntityRepository(Token)
class TokenService {
    async generateTokenActivate(payload: IUserPayload):Promise<ITokenActivate> {
        // const accessToken = jwt.sign(
        //     payload,
        //     process.env.SECRET_ACCESS_KEY,
        //     { expiresIn: '1h' },
        // );
        // const refreshToken = jwt.sign(
        //     payload,
        //     process.env.SECRET_REFRESH_KEY,
        //     { expiresIn: '24h' },
        // );
        const activateToken = jwt.sign(
            payload,
            process.env.SECRET_ACTIVATE_KEY!,
            { expiresIn: '48h' },
        );
        return {
            // accessToken,
            // refreshToken,
            activateToken,
        };
    }

    async generateTokenPair(payload: IUserPayload):Promise<ITokenPair> {
        const accessToken = jwt.sign(
            payload,
            process.env.SECRET_ACCESS_KEY!,
            { expiresIn: '10m' },
        );
        const refreshToken = jwt.sign(
            payload,
            process.env.SECRET_REFRESH_KEY!,
            { expiresIn: '24h' },
        );
        return {
            accessToken,
            refreshToken,
        };
    }

    async saveTokenActivate(id: number, activateToken: string): Promise<UpdateResult> {
        return getManager().getRepository(User).update({ id }, { activateToken });
    }

    async saveToken(userId: { id: number | undefined }, refreshToken: string, accessToken: string) {
        return getManager().getRepository(Token).save(userId);
    }

    // async deleteUserTokenPair(userId: number) {
    //     return model.Token.destroy({ where: { userId } });
    // }

    // async deleteTokenPairByParams(refreshToken: string | undefined) {
    //     return model.Token.findOne({ where: { refreshToken } });
    // }

    async verifyToken(authToken: string, tokenType = 'accessToken') {
        let secretWord = process.env.SECRET_ACCESS_KEY;
        if (tokenType === 'refreshToken') {
            secretWord = process.env.SECRET_REFRESH_KEY;
        }
        let tokenPayload;
        if (secretWord) {
            tokenPayload = jwt.verify(authToken, secretWord);
        }
        return tokenPayload;
    }

    // async findByParamsAccess(accessToken: string) {
    //     return model.Token.findOne({ where: { accessToken } });
    // }
    //
    // async findByParamsRefresh(refreshToken: string) {
    //     return model.Token.findOne({ where: { refreshToken } });
    // }
}

export const tokenService = new TokenService();
