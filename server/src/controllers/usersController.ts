import { NextFunction, Request, Response } from 'express';

class UsersController {
    async getUsers(req: Request, res: Response, next: NextFunction) {

    }

    async getUserById(req: Request, res: Response, next: NextFunction) {

    }

}

export const usersController = new UsersController();