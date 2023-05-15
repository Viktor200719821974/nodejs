import { Router } from 'express';

import { exercisesController } from '../controllers/exercisesController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { tasksMiddleware } from '../middlewares/tasksMiddleware';
import { validates } from '../middlewares/validation';
import { exercisesMiddleware } from '../middlewares/exercisesMiddleware';

const router = Router();

router.post(
    '/',
    authMiddleware.checkAccessToken,
    authMiddleware.userStaff,
    validates.exercises,
    tasksMiddleware.checkImageTask,
    exercisesMiddleware.chooseImageTaskLength,
    exercisesController.createExercise,
);
router.get('/', exercisesController.getExercises);
router.get('/:lessonId', exercisesController.getExercisesForLesson);

export const exercisesRouter = router;
