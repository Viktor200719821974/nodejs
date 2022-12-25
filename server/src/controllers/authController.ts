import { NextFunction, Request, Response } from 'express';

import { IRequestExtended, IUser } from '../interfaces';
import { authService } from '../services/authService';
import { emailService } from '../services/emailService';
import { tokenService } from '../services/tokenService';
import { usersService } from '../services/usersService';

class AuthController {
    async registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password, name } = req.body;
            const { activateToken } = await authService.registration(req.body, password, email);
            const sendEmail = await emailService.sendMail(email, 'WELCOME', { userName: name }, activateToken)
                .catch(console.error);
            if (!sendEmail) {
                res.status(404).json('Problems is send email');
                return;
            }
            const user = await usersService.getUserByEmail(email);
            res.status(200).json(user);
        } catch(e) {
            next(e);
        }

    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const id = await usersService.getUserByEmail(email)
            .then(data => data?.id);
            if (!id) {
                res.status(400).json('Bad email or password');
                return;
            }
            const {accessToken, refreshToken} = await authService.login(email, id);
            res.status(200).json({accessToken, refreshToken});
        } catch(e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id } = req.user;
            await tokenService.deleteTokenPair(Number(id));
            res.json('Ok');
        } catch (e) {
            next(e);
        }
    }

    async forgetPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const { activateToken, userName } = await authService.forgetPassword(email);
            // @ts-ignore
            const sendEmail = await emailService.sendMail(email, 'FORGET_PASSWORD', { userName }, activateToken)
                .catch(console.error);
            if (!sendEmail) {
                res.status(404).json('Problems is send email');
                return;
            }
            res.status(200).json('Ok');
        } catch (e) {
            next(e);
        }
    }

    async changePassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { token } = req.params;
            const { password, repeatPassword } = req.body;
            if (password !== repeatPassword) {
                res.status(400).json('Passwords do not match');
                return;
            }
            // @ts-ignore
            const { userId } = await tokenService.verifyToken(token, 'activateToken')
                .catch(err => {
                    if (err) {
                        res.status(404).json('Bad token');
                        return;
                    }
                });
            const findToken = await tokenService.findByParamsActivateToken(token);
            if (!findToken) {
                res.status(404).json('No token');
                return;
            }
            await authService.changePassword(password, userId);
            res.status(200).json('Password changed');
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id, email } = req.user as IUser;
            const refreshTokenToDelete = req.get('Authorization');
            if (refreshTokenToDelete) {
                const token = await tokenService.findByParamsToken(refreshTokenToDelete);
                    if (!token) {
                        res.status(404).json('No token');
                    }
            }
            await tokenService.deleteTokenPair(id);
            const { accessToken, refreshToken, userId } = await tokenService.generateTokenPair(
                { userId: id, userEmail: email },
            );
            //@ts-ignore
            await tokenService.saveToken({ accessToken, refreshToken, userId });
            res.json({
                refreshToken,
                accessToken,
                user: req.user,
            });
        } catch (e) {
            next(e);
        }
    }
}

export const authController = new AuthController();