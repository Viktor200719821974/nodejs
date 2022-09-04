import { Router } from 'express';
import { authController } from '../controllers/authController';
import { authValidate } from '../middlewares/validations/authValidate';
import { usersMiddleware } from '../middlewares/usersMiddleware';

const router = Router();

router.post('/registration', authValidate.registration, usersMiddleware.findUserByEmail, authController.registration);
router.post('/login', authValidate.login, usersMiddleware.findUser, authController.login);

export const authRouter = router;
