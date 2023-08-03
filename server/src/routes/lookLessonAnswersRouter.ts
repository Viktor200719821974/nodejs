import { Router } from 'express';
import { lookLessonAnswersController } from '../controllers/lookLessonAnswersController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/:lessonId', authMiddleware.checkAccessToken, lookLessonAnswersController.getLookLessonAnswersByLessonId);
router.post('/', authMiddleware.checkAccessToken, lookLessonAnswersController.createLookLessonAnswer);

export const lookLessonAnswersRouter = router;