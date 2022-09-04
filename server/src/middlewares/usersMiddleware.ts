import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { ErrorHandler } from '../error/errorHandler';
import { usersRepository } from '../repositories/usersRepository';
import { IRequestExtended } from '../interfaces';

class UsersMiddleware {
    public async findUserByEmail(req: Request, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const email = await usersRepository.getUserByEmail(req.body.email);
            if (email) {
                next(new ErrorHandler('Email already exist'));
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    public async findUser(req: IRequestExtended, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const { email, password } = req.body;
            const user = await usersRepository.getUserByEmail(email);
            if (!user) {
                next(new ErrorHandler('Bad email or password'));
                return;
            }
            req.user = user;
            const userPassword = user.password;
            const comparePassword = bcrypt.compareSync(password, userPassword);
            if (!comparePassword) {
                next(new ErrorHandler('Bad email or password'));
                return;
            }
            const activeUser = user.is_active;
            if (!activeUser) {
                next(new ErrorHandler('User not active'));
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const usersMiddleware = new UsersMiddleware();
