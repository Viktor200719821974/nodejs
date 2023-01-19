import { Router } from 'express';
import { statisticsController } from '../controllers/statisticsController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('', authMiddleware.checkAccessToken, statisticsController.createStatistic);
router.get('', authMiddleware.checkAccessToken, statisticsController.getStatisticByUserId);
router.put('', authMiddleware.checkAccessToken, statisticsController.updateEveryDayTarget);

export const staticsRouter = router;