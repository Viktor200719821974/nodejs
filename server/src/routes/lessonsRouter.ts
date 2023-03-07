import { Router } from 'express';

import { lessonController } from '../controllers/lessonController';
import { lookLessonAnswerController } from '../controllers/lookLessonAnswerController';
import { lessonsMiddleware } from '../middlewares/lessonsMiddleware';

const router = Router();

router.post('/', lessonsMiddleware.findLessonByNumber, lessonController.createLesson);
router.get('/', lessonController.getLessons);
router.post('/exercise/:lessonNumber', lessonController.createExercise);
router.post('/exercise/task/:exerciseId', lessonsMiddleware.maxLengthArrayTask, lessonController.createTaskExercise);
router.post('/lookLessonAnswer', lookLessonAnswerController.createLookLessonAnswer );
router.get('/lookLessonAnswer', lookLessonAnswerController.getLookLessonAnswer );
router.patch('/', );

export const lessonsRouter = router;