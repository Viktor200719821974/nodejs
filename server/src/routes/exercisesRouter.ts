import { Router } from 'express';

import { exercisesController } from '../controllers/exercisesController';

const router = Router();

router.post('/:lessonNumber', exercisesController.createExercise);
router.get('/', exercisesController.getExercises);
router.get('/:lessonNumber', exercisesController.getExercisesLesson)

export const exercisesRouter = router;