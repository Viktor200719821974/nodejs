import { NextFunction, Request, Response } from 'express';

import { validators } from '../../validators/validators';

class Validates {
    registration(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.registration.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    forgetPassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.forgetPassword.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    changePassword(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.changePassword.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const validates = new Validates();
