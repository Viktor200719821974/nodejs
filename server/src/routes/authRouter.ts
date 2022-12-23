import { Router } from 'express';

import { authController } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { registrationValidate } from '../middlewares/validation/registrationValidate';

const router = Router();

router.post('/registration', authMiddleware.findUserByEmail, registrationValidate.registration, authController.registration);
router.post('/login', authMiddleware.findUser, authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refresh);
router.post('/forget_password', authMiddleware.findUserByEmail, authController.forgetPassword);
router.post('/change_password/:token', authController.changePassword);

export const authRouter = router;