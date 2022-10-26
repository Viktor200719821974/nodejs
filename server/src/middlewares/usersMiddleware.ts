import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
// import { ErrorHandler } from '../error/errorHandler';
import { usersRepository } from '../repositories/usersRepository';

class UsersMiddleware {
    public async findUserByEmail(req: Request, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const email = await usersRepository.getUserByEmail(req.body.email);
            if (email) {
                // next(new ErrorHandler('Email already exist'));
                res.status(400).json('Email already exist');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    public async findUser(req: Request, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const { email, password } = req.body;
            const user = await usersRepository.getUserByEmailMiddleware(email);
            if (!user) {
                // next(new ErrorHandler('Bad email or password'));
                res.status(400).json('Bad email or password');
                return;
            }
            const userPassword = user.password;
            const comparePassword = bcrypt.compareSync(password, userPassword);
            if (!comparePassword) {
                // next(new ErrorHandler('Bad email or password'));
                res.status(400).json('Bad email or password');
                return;
            }
            const activeUser = user.is_active;
            if (!activeUser) {
                // next(new ErrorHandler('User not active'));
                res.status(401).json('User is not active');
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const usersMiddleware = new UsersMiddleware();
