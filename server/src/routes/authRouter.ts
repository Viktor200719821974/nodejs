import { Router } from 'express';
import { authController } from '../controllers/authController';
import { authValidate } from '../middlewares/validations/authValidate';
import { usersMiddleware } from '../middlewares/usersMiddleware';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/registration', authValidate.registration, usersMiddleware.findUserByEmail, authController.registration);
router.post('/login', authValidate.login, usersMiddleware.findUser, authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refreshToken);

export const authRouter = router;
