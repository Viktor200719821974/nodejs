import { NextFunction, Request, Response } from 'express';

class AuthController {
    async registration(req: Request, res: Response, next: NextFunction) {

    }

    async login(req: Request, res: Response, next: NextFunction) {

    }

    async logout(req: Request, res: Response, next: NextFunction) {

    }

    async refresh(req: Request, res: Response, next: NextFunction) {
        
    }
}

export const authController = new AuthController();