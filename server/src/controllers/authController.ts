import { NextFunction, Request, Response } from 'express';
import { authService } from '../services/authService';
import { tokenService } from '../services/tokenService';
import { IRequestExtended } from '../interfaces';

class AuthController {
    public async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await authService.registration(req.body);
            const { email, id } = user;
            const token = await tokenService.generateTokenActivate({
                userId: +id,
                userEmail: email,
            });
            await tokenService.saveTokenActivate(+id, token.activateToken);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    public async login(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const id = req.user?.id;
            const email = req.user?.email;
            const { accessToken, refreshToken } = await tokenService.generateTokenPair({
                userId: id,
                userEmail: email,
            });
            const user = await tokenService.saveToken({ id }, accessToken, refreshToken);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }
}

export const authController = new AuthController();
