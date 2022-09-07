import { NextFunction, Request, Response } from 'express';
import { usersService } from '../services/usersService';
import { IRequestExtended } from '../interfaces';
import { ErrorHandler } from '../error/errorHandler';
import { emailService } from '../services/emailService';

class UsersController {
    public async getUsers(req:Request, res:Response, next: NextFunction) {
        try {
            const users = await usersService.getUsers();
            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    public async getUserById(req:Request, res:Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await usersService.getUserById(+id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    public async getUserByEmail(req:Request, res:Response, next: NextFunction) {
        try {
            const { email } = req.params;
            const user = await usersService.getUserByEmail(email);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    public async changeUsers(req:Request, res:Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const users = await usersService.changeUser(req.body, id);
            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    public async deleteUsers(req:Request, res:Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await usersService.deletedUser(id);
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
            const email = user?.email;
            const firstName = user?.firstName;
            const lastName = user?.lastName;
            const sendEmail = await emailService.sendMail(email, 'ACCOUNT_BLOCKED', {
                userName: firstName,
                surname: lastName,
            })
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

    async userUnlocked(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const user = await usersService.userUnlocked(+id);
            const email = user?.email;
            const firstName = user?.firstName;
            const lastName = user?.lastName;
            const sendEmail = await emailService.sendMail(email, 'ACCOUNT_UNLOCKED', {
                userName: firstName,
                surname: lastName,
            })
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

    async activateUser(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const activateToken = req.params.token;
            if (!activateToken) {
                next(new ErrorHandler('Bad request'));
            }
            const activate = await usersService.activateUser(activateToken);
            if (activate !== 'Ok') {
                next(new ErrorHandler('Not found', 404));
                return;
            }
            res.json('User activated');
        } catch (e) {
            next(e);
        }
    }
}

export const usersController = new UsersController();
