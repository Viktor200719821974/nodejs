import { Router } from 'express';

import { exercisesController } from '../controllers/exercisesController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validates } from '../middlewares/validation';

const router = Router();

router.post('/', authMiddleware.checkAccessToken, authMiddleware.userStaff, validates.exercises, exercisesController.createExercise);
router.get('/', exercisesController.getExercises);
router.get('/:lessonId', exercisesController.getExercisesForLesson);

export const exercisesRouter = router;
