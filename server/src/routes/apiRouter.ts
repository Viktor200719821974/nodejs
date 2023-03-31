import {
    NextFunction, Request, Response, Router,
} from 'express';

import { authRouter } from './authRouter';
import { lessonsRouter } from './lessonsRouter';
import { staticsRouter } from './statisticsRouter';
import { usersRouter } from './usersRouter';
import { exercisesRouter } from './exercisesRouter';
import { themesRouter } from './themesRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/statistic', staticsRouter);
router.use('/lessons', lessonsRouter);
router.use('/exercises', exercisesRouter);
router.use('/themes', themesRouter);
// @ts-ignore
router.use('*', (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500)
        .json({
            message: err.message,
        });
    // eslint-disable-next-line no-console
    console.log(next);
});

export const apiRouter = router;
