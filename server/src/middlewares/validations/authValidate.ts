import { Request, Response, NextFunction } from 'express';
import { validators } from '../../validators/validators';
// import { ErrorHandler } from '../../error/errorHandler';

class AuthValidate {
    public async registration(req: Request, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const { error } = validators.registration.validate(req.body);
            if (error && error !== undefined) {
                // next(new ErrorHandler(error.message, 400));
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const {error} = validators.login.validate(req.body);
            if (error && error !== undefined) {
                // next(new ErrorHandler(error.message));
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authValidate = new AuthValidate();
