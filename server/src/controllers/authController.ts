import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/authService';
import { tokenRepository } from '../repositories/tokenRepository';
import { ErrorHandler } from '../error/errorHandler';
import { usersRepository } from '../repositories/usersRepository';
import { IRequestExtended } from '../interfaces';
import { IUser } from '../entity/user';
import { emailService } from '../services/emailService';

class AuthController {
    public async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await authService.registration(req.body);
            const { email, id, firstName } = user;
            const token = await tokenRepository.generateTokenActivate({
                userId: id,
                userEmail: email,
            });
            await tokenRepository.saveTokenActivate(id, token.activateToken);
            const sendEmail = await emailService.sendMail(email, 'WELCOME', { firstName }, token)
                // eslint-disable-next-line no-console
                .catch(console.error);
            if (!sendEmail) {
                next(new ErrorHandler('Problems is send email', 404));
                return;
            }
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
            const tokenPair = await tokenRepository.generateTokenPair({
                userId: id,
                userEmail: email,
            });
            const token = await tokenRepository.saveToken(tokenPair);
            res.json(token);
        } catch (e) {
            next(e);
        }
    }

    public async logout(req: IRequestExtended, res: Response, next: NextFunction) {
        const id = req.user?.id;
        if (id !== undefined) {
            await tokenRepository.deleteUserTokenPair(id);
        } else {
            next(new ErrorHandler('Bad request'));
        }
        res.json('Ok');
    }

    async refreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id, email } = req.user as IUser;
            const refreshTokenToDelete = req.body.refreshToken;
            const token = await tokenRepository.findTokenRefresh(refreshTokenToDelete);
            if (!token) {
                next(new ErrorHandler('Unauthorized', 401));
                return;
            }
            const tokenPair = await tokenRepository.generateTokenPair(
                { userId: id, userEmail: email },
            );
            const { accessToken, refreshToken } = tokenPair;
            await tokenRepository.saveToken(tokenPair);
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
