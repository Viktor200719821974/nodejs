import Router from 'express';

import { agendaController } from '../controllers/agendaController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware.checkAccessToken, agendaController.getAgendaUser);
router.patch('/', authMiddleware.checkAccessToken, agendaController.updateUserAgenda);


export const agendaRouter = router;