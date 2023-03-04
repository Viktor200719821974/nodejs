import { Router } from 'express';
import { lookLessonAnswerController } from '../controllers/lookLessonAnswerController';

const router = Router();

router.post('/lookLessonAnswer', lookLessonAnswerController.createLookLessonAnswer );
router.get('/lookLessonAnswer', lookLessonAnswerController.getLookLessonAnswer );
router.patch('/', );

export const lessonsRouter = router;