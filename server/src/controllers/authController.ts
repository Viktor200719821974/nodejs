import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/authService';
import { tokenService } from '../services/tokenService';
import { ErrorHandler } from '../error/errorHandler';
import { usersRepository } from '../repositories/usersRepository';
import { IRequestExtended } from '../interfaces';
import { IUser } from '../entity/user';
import { constants } from '../constants/constants';

class AuthController {
    public async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await authService.registration(req.body);
            const { email, id } = user;
            const token = await tokenService.generateTokenActivate({
                userId: id,
                userEmail: email,
            });
            await tokenService.saveTokenActivate(id, token.activateToken);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const user = await usersRepository.getUserByEmail(email);
            if (!user) {
                next(new ErrorHandler('Bad email', 404));
                return;
            }
            const { id } = user;
            const tokenPair = await tokenService.generateTokenPair({
                userId: id,
                userEmail: email,
            });
            const token = await tokenService.saveToken(tokenPair);
            res.json({
                token,
                user,
            });
        } catch (e) {
            next(e);
        }
    }

    public async logout(req: IRequestExtended, res: Response, next: NextFunction) {
        const id = req.user?.id;
        if (id !== undefined) {
            await tokenService.deleteUserTokenPair(id);
        } else {
            next(new ErrorHandler('Bad request'));
        }
        res.json('Ok');
    }

    async refreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id, email } = req.user as IUser;
            const refreshTokenToDelete = req.get(constants.AUTHORIZATION);
            const token = await tokenService.findTokenRefresh(refreshTokenToDelete);
            if (!token) {
                next(new ErrorHandler('Unauthorized', 401));
                return;
            }
            const tokenPair = await tokenService.generateTokenPair(
                { userId: id, userEmail: email },
            );
            const { accessToken, refreshToken } = tokenPair;
            await tokenService.saveToken(tokenPair);
            res.json({
                refreshToken,
                accessToken,
            });
        } catch (e) {
            next(e);
        }
    }
}

export const authController = new AuthController();
