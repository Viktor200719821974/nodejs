import { Router } from 'express';
import { themesController } from '../controllers/themesController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validates } from '../middlewares/validation';

const router = Router();

router.get('/', themesController.getThemes);
router.post('/', authMiddleware.checkAccessToken, authMiddleware.userStaff, validates.theme, themesController.createTheme);
export const themesRouter = router;
