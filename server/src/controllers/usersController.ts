import { NextFunction, Request, Response } from 'express';
import { usersService } from '../services/usersService';

class UsersController {
    public async getUsers(req:Request, res:Response, next: NextFunction) {
        try {
            const users = await usersService.getUsers([]);
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
}

export const usersController = new UsersController();
