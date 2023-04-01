import { Router } from 'express';
import { tasksController } from '../controllers/tasksController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware.checkAccessToken, authMiddleware.userStaff, tasksController.getTasks);
router.get('/:title', authMiddleware.checkAccessToken, authMiddleware.userStaff, tasksController.getTasksForTheme);
router.post('/', authMiddleware.checkAccessToken, authMiddleware.userStaff, tasksController.createTask);

export const tasksRouter = router;
