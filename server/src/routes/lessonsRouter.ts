import { Router } from 'express';

import { lessonsController } from '../controllers/lessonsController';
import { lookLessonAnswerController } from '../controllers/lookLessonAnswerController';
import { lessonsMiddleware } from '../middlewares/lessonsMiddleware';
import { validates } from '../middlewares/validation';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', lessonsMiddleware.findLessonByNumberByThemeId, validates.lessons, lessonsController.createLesson);
router.get('/', authMiddleware.checkAccessToken, lessonsController.getLessons);
router.get('/:id', lessonsController.getLessonById);
// router.get('/exercises', exercisesController.getExercises);
// router.post('/exercise/:lessonNumber', exercisesController.createExercise);
router.post('/exercise/task/:exerciseId', lessonsController.createTaskExercise);
router.post('/lookLessonAnswer', lookLessonAnswerController.createLookLessonAnswer);
router.get('/lookLessonAnswer', lookLessonAnswerController.getLookLessonAnswer);
// router.patch('/', );

export const lessonsRouter = router;
