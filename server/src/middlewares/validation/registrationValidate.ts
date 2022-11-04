import { NextFunction, Request, Response } from 'express';

import { validators } from '../../validators/validators';

class RegistrationValidate {
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
}

export const registrationValidate = new RegistrationValidate();
