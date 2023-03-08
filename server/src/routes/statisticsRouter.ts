import { Router } from 'express';

import { statisticsController } from '../controllers/statisticsController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', statisticsController.createStatistic);
router.get('/', authMiddleware.checkAccessToken, statisticsController.getStatisticByUserId);
router.patch('/', authMiddleware.checkAccessToken, statisticsController.updateEveryDayTarget);

export const staticsRouter = router;