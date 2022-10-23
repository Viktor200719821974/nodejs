import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../interfaces';
import { ErrorHandler } from '../error/errorHandler';
import { tokenRepository } from '../repositories/tokenRepository';
import { usersService } from '../services/usersService';

class AuthMiddleware {
    public async checkAccessToken(req: IRequestExtended, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                next(new ErrorHandler('No token', 404));
                return;
            }
            // @ts-ignore
            const { userEmail } = await tokenRepository.verifyToken(token).catch(err => {
                if (err) {
                    next(new ErrorHandler('Unauthorized', 401));
                    return; 
                }
            });
            await tokenRepository.findByParamsAccess(token);
            const user = await usersService.getUserByEmail(userEmail)
                .then((data) => data);
            if (user) {
                req.user = user;
            } else {
                next(new ErrorHandler('Not found', 404));
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    public async checkRefreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization;
            if (!token) {
                next(new ErrorHandler('Unauthorized', 401));
                return;
            }
            // @ts-ignore
            const { userEmail } = await tokenRepository.verifyToken(token, 'refreshToken')
            .catch(err => {
                if (err) {
                    next(new ErrorHandler('Unauthorized', 401));
                    return;
                }
            });
            await tokenRepository.findByParamsRefresh(token);
            const user = await usersService.getUserByEmail(userEmail).then((data) => data);
            if (user) {
                req.user = user;
            } else {
                next(new ErrorHandler('Not found', 404));
            }
            next();
        } catch (e: any) {
            next(e);
        }
    }

    async userStaff(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { user } = req;
            if (!user?.is_superuser && !user?.is_staff) {
                next(new ErrorHandler('Forbidden', 403));
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    async superUser(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { user } = req;
            if (!user?.is_superuser) {
                next(new ErrorHandler('Forbidden', 403));
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();
