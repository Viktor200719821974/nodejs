import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { EntityRepository, getManager, UpdateResult } from 'typeorm';
import { IUserPayload, ITokenActivate, ITokenDataToSave } from '../interfaces';
import { User } from '../entity/user';
import { Token } from '../entity/token';

dotenv.config();

@EntityRepository(Token)
class TokenService {
    public async generateTokenActivate(payload: IUserPayload):Promise<ITokenActivate> {
        const activateToken = jwt.sign(
            payload,
            process.env.SECRET_ACTIVATE_KEY!,
            { expiresIn: '48h' },
        );
        return {
            activateToken,
        };
    }

    public async generateTokenPair(payload: IUserPayload):Promise<ITokenDataToSave> {
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
            userId: payload.userId,
        };
    }

    public async saveTokenActivate(id: number, activateToken: string): Promise<UpdateResult> {
        return getManager().getRepository(User).update({ id }, { activateToken });
    }

    public async saveToken(tokenPair: ITokenDataToSave): Promise<ITokenDataToSave> {
        const token = await getManager().getRepository(Token).find({ userId: tokenPair.userId });
        if (token) {
            await getManager().getRepository(Token).delete({ userId: tokenPair.userId });
        }
        return getManager().getRepository(Token).save(tokenPair);
    }

    public async deleteUserTokenPair(userId: number) {
        return getManager().getRepository(Token).delete({ userId });
    }

    async findTokenRefresh(refreshToken: string | undefined) {
        return getManager().getRepository(Token).findOne({ refreshToken });
    }

    public async verifyToken(authToken: string, tokenType = 'accessToken'): Promise<JwtPayload | string> {
        let secretWord = process.env.SECRET_ACCESS_KEY!;
        if (tokenType === 'refreshToken') {
            secretWord = process.env.SECRET_REFRESH_KEY!;
        }
        return jwt.verify(authToken, secretWord);
    }

    async findByParamsAccess(accessToken: string) {
        return getManager().getRepository(Token).findOne({ accessToken });
    }

    async findByParamsRefresh(refreshToken: string) {
        return getManager().getRepository(Token).findOne({ refreshToken });
    }
}

export const tokenService = new TokenService();
