import { Router } from 'express';
import { tasksController } from '../controllers/tasksController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validates } from '../middlewares/validation';
import { tasksMiddleware } from '../middlewares/tasksMiddleware';

const router = Router();

router.get('/', authMiddleware.checkAccessToken, authMiddleware.userStaff, tasksController.getTasks);
router.post(
    '/',
    authMiddleware.checkAccessToken,
    authMiddleware.userStaff,
    tasksMiddleware.emptyFieldQuestionAndAnswerAndChooseTheme,
    tasksMiddleware.onlyOneWord,
    tasksMiddleware.checkImageTask,
    validates.tasks,
    tasksMiddleware.findSimilarTasks,
    tasksController.createTask,
);
router.delete('/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, tasksController.deleteTask);

export const tasksRouter = router;
