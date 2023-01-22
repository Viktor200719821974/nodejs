import { NextFunction, Request, Response } from 'express';

import { IRequestExtended } from '../interfaces';
import { emailService } from '../services/emailService';
// import { tokenService } from '../services/tokenService';
import { usersService } from '../services/usersService';

class UsersController {
    async getUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await usersService.getUsers();
            res.json(users);
        } catch(e) {
            next(e);
        }   
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await usersService.getUserById(+id);
            res.status(200).json(user);
        } catch(e) {
            next(e);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await usersService.deleteUser(id);
            res.json('Ok');
        } catch (e) {
            next(e);
        }
    }

    async userManager(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await usersService.userManager(+id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async userIsNotManager(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await usersService.userIsNotManager(+id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async userBlocked(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
             const user = await usersService.userBlocked(+id);
            // @ts-ignore
            const { email, name, surname } = user;
            const sendEmail = await emailService.sendMail(email, 'ACCOUNT_BLOCKED', { userName: name, surname })
                .catch(console.error);
            if (!sendEmail) {
                res.status(404).json('Problems is send email');
                return;
            }
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async userUnlocked(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await usersService.userUnlocked(+id);
            // @ts-ignore
            const { email, name, surname } = user;
            const sendEmail =  await emailService.sendMail(email, 'ACCOUNT_UNLOCKED', { userName: name, surname })
                .catch(console.error);
            if (!sendEmail) {
                res.status(404).json('Problems is send email');
                return;
            }
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async activateUser(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const activateToken = req.params.token;
            if (!activateToken) {
                res.status(400).json('Bad request');
            }
            // @ts-ignore
            const { id } = req.user;
            await usersService.activateUser(id);
            res.json('User activated');
        } catch (e) {
            next(e);
        }
    }
}

export const usersController = new UsersController();