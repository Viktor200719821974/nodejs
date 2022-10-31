import { NextFunction, Request, Response } from 'express';

import { IUser } from '../interfaces';
import { authService } from '../services/authService';
import { usersService } from '../services/usersService';

class AuthController {
    async registration(req: Request, res: Response, next: NextFunction): Promise<IUser | undefined> {
        try {
            const { email, password } = req.body;
            const userEmail = await usersService.getUserByEmail(email);
            if (userEmail !== null) {
                res.status(400).json(`User with email: ${email} already exist`);
                return;
        }
            const user = await authService.registration(req.body, password, email);
            res.json(user);
            return;
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
                res.status(404).json('Bad email or password');
                return;
            }
            const tokenPair = await authService.login(email, id);
            res.json(tokenPair);
            return;
        } catch(e) {
            next(e);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {

    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        
    }
}

export const authController = new AuthController();