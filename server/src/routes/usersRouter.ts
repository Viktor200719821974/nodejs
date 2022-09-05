import { Router } from 'express';
import { usersController } from '../controllers/usersController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware.checkAccessToken, usersController.getUsers);
router.get('/:id', authMiddleware.checkAccessToken, usersController.getUserById);
router.patch('/:id', authMiddleware.checkAccessToken, authMiddleware.superUser, usersController.changeUsers);
router.delete('/:id', authMiddleware.checkAccessToken, authMiddleware.superUser, usersController.deleteUsers);
router.get('/:email', authMiddleware.checkAccessToken, usersController.getUserByEmail);
router.get('/activateUser/:token', usersController.activateUser);
router.patch('/userManager/:id', authMiddleware.checkAccessToken, authMiddleware.superUser, usersController.userManager);
router.patch('/userIsNotManager/:id', authMiddleware.checkAccessToken, authMiddleware.superUser, usersController.userIsNotManager);
router.patch('/userBlocked/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, usersController.userBlocked);
router.patch('/userUnlocked/:id', authMiddleware.checkAccessToken, authMiddleware.userStaff, usersController.userUnlocked);

export const usersRouter = router;
