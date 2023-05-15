import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import { modulesController } from '../controllers/modulesController';
import { validates } from '../middlewares/validation';
import { modulesMiddleware } from '../middlewares/modulesMiddleware';

const router = Router();

router.post(
    '/',
    authMiddleware.checkAccessToken,
    authMiddleware.userStaff,
    validates.modules,
    modulesMiddleware.findModuleByNumberByThemeId,
    modulesController.createModule,
);
router.get('/', authMiddleware.checkAccessToken, modulesController.getModules);

export const modulesRouter = router;
