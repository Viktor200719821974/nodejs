import { Router } from 'express';

import { authController } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validates } from '../middlewares/validation';

const router = Router();

router.post('/registration', authMiddleware.findUserByEmail, validates.registration, authController.registration);
router.post('/login', authMiddleware.findUser, authController.login);
router.post('/logout', authMiddleware.checkAccessToken, authController.logout);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refresh);
router.post('/forgetPassword', validates.forgetPassword, authMiddleware.findUserByEmailExist, authController.forgetPassword);
router.post('/changePassword/:token', validates.changePassword, authController.changePassword);

export const authRouter = router;
