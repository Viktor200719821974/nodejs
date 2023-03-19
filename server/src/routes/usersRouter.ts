import { Router } from 'express';

import { usersController } from '../controllers/usersController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware.checkAccessToken, usersController.getUsers);
router.get('/:id', authMiddleware.checkAccessToken, usersController.getUserById);
router.get('/activateUser/:token', authMiddleware.findActivateToken, usersController.activateUser);
router.delete('/:id', authMiddleware.checkAccessToken, authMiddleware.superUser, usersController.deleteUser);
router.patch('/userBlocked/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, usersController.userBlocked);
router.patch('/userIsNotManager/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, usersController.userIsNotManager);
router.patch('/userManager/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, usersController.userManager);
router.patch('/userUnlocked/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, usersController.userUnlocked);

export const usersRouter = router;
