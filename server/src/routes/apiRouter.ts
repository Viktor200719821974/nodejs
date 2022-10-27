import { NextFunction, Request, Response, Router } from 'express';

import { authRouter } from './authRouter';
import { usersRouter } from './usersRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
//@ts-ignore
router.use('*', (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
        .json({
            message: err.message,
        });
});

export const apiRouter = router;