import { Request, Response, NextFunction } from 'express';
import { validators } from '../../validators/validators';
import { ErrorHandler } from '../../error/errorHandler';

class AuthValidate {
    public async registration(req: Request, res: Response, next: NextFunction)
        :Promise<void | never> {
        try {
            const { error } = await validators.registration.validate(req.body);
            if (error) {
                next(new ErrorHandler(error.message, 400));
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
            console.log(error, 'error');
            if (error) {
                next(new ErrorHandler(error.message));
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const authValidate = new AuthValidate();
