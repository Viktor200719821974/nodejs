import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';

import { IRequestExtended } from '../interfaces';
import { model } from '../models';
import { usersService } from '../services/usersService';
import { tokenService } from '../services/tokenService';

class AuthMiddleware {
    async checkAccessToken(req: IRequestExtended, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                res.status(404).json('No token');
                return;
            }
            // @ts-ignore
            const { userEmail } = await tokenService.verifyToken(token).catch(err => {
                if (err) {
                    res.status(401).json('Unauthorized');
                    return;
                }
            });
            const findToken = await tokenService.findByParamsToken(token);
            if (!findToken) {
                res.status(404).json('No token');
                return;
            }
            const user = await usersService.getUserByEmail(userEmail)
                .then((data) => data);
            if (user) {
                req.user = user;
            } else {
                res.status(404).json('Not found');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    async findUserByEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const userEmail = await usersService.getUserByEmail(email);
            if (userEmail !== null) {
                res.status(400).json(`User with email: ${email} already exist`);
                return;
            }
            next();
        } catch(e) {
            next(e);
        }
    }

    async findUserByEmailExist(req: Request, res: Response, next: NextFunction) {
        try {
            const { email } = req.body;
            const user = await usersService.getUserByEmail(email);
            if (user === null) {
                res.status(400).json(`User with email: ${email} not exist`);
                return;
            }
            next();  
        } catch (e) {
            next(e);
        }
    }
    async findActivateToken(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const activateToken = req.params.token;
            if (!activateToken) {
                res.status(400).json('Bad request');
            }
            // @ts-ignore
            const { userId } = await tokenService.verifyToken(activateToken, 'activateToken')
                .catch(err => {
                    if (err) {
                        res.status(404).json('Bad token');
                        return;
                    }
                });
            const user = await model.User.findOne({ where: { id: userId }}).catch(err => console.log(err));
            if (user) {
                req.user = user;
            }
            if (user?.is_active) {
                res.status(400).json('Token was already used');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    async findUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const user = await model.User.findOne({ where: { email } });
            if (!user) {
                res.status(400).json('Bad email or password');
                return;
            }
            const userPassword = user.password;
            if (typeof userPassword === 'string') {
                const comparePassword = bcrypt.compareSync(password, userPassword);
                if (!comparePassword) {
                    res.status(400).json('Bad email or password');
                    return;
                }
            }
            const activeUser = user.is_active;
            if (!activeUser) {
                res.status(400).json('User not active');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    async checkRefreshToken(req: IRequestExtended, res: Response, next: NextFunction) {
        if (req.method === 'OPTIONS') {
            next();
        }
        try {
            const token = req.headers.authorization;
            if (!token) {
                res.status(401).json('Unauthorized');
                return;
            }
            //@ts-ignore
            const { userEmail } = await tokenService.verifyToken(token, 'refreshToken')
            .catch(err => {
                if (err) {
                    res.status(401).json('Unauthorized');
                    return;
                }
            });
            const findToken = await tokenService.findByParamsToken(token);
            if (!findToken) {
                res.status(400).json('No token');
                return;
            }
            const user = await usersService.getUserByEmail(userEmail);
            if (user) {
                req.user = user;
            } else {
                res.status(404).json('Not found');
                return;
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
                res.status(403).json('Forbidden');
                return;
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
                res.status(403).json('Forbidden');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authMiddleware = new AuthMiddleware();