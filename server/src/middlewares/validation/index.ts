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

    theme(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.theme.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
    tasks(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.tasks.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
    modules(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.modules.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
    lessons(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.lessons.validate(req.body);
            if (error) {
                res.status(400).json(error.message);
                return;
            }
            next();
        } catch (e) {
            next(e);
        }
    }
    exercises(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = validators.exercises.validate(req.body);
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
