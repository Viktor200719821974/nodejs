import { Router } from 'express';

import { lessonsController } from '../controllers/lessonsController';
import { lookLessonAnswerController } from '../controllers/lookLessonAnswerController';
import { lessonsMiddleware } from '../middlewares/lessonsMiddleware';

const router = Router();

router.post('/', lessonsMiddleware.findLessonByNumber, lessonsController.createLesson);
router.get('/', lessonsController.getLessons);
router.get('/:id', lessonsController.getLessonById);
// router.get('/exercises', exercisesController.getExercises);
// router.post('/exercise/:lessonNumber', exercisesController.createExercise);
router.post('/exercise/task/:exerciseId', lessonsMiddleware.maxLengthArrayTask, lessonsController.createTaskExercise);
router.post('/lookLessonAnswer', lookLessonAnswerController.createLookLessonAnswer);
router.get('/lookLessonAnswer', lookLessonAnswerController.getLookLessonAnswer);
// router.patch('/', );

export const lessonsRouter = router;
