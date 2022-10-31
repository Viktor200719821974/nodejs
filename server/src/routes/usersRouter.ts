import { Router } from 'express';

import { usersController } from '../controllers/usersController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware.checkAccessToken, usersController.getUsers);
router.get('/:id', authMiddleware.checkAccessToken, usersController.getUserById);

export const usersRouter = router;