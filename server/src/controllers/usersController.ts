import { NextFunction, Request, Response } from 'express';

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
            res.json(user);
        } catch(e) {
            next(e);
        }
    }

}

export const usersController = new UsersController();