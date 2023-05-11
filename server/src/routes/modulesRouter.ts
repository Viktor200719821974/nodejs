import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import { modulesController } from '../controllers/modulesController';

const router = Router();

router.post('/', authMiddleware.checkAccessToken, authMiddleware.userStaff, modulesController.createModule);
router.get('/', authMiddleware.checkAccessToken, modulesController.getModules);

export const modulesRouter = router;