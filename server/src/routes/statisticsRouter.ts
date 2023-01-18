import { Router } from 'express';
import { statisticsController } from '../controllers/statisticsController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.post('', authMiddleware.checkAccessToken, statisticsController.createStatistic);

export const staticsRouter = router;