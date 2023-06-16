import { Request, Response, NextFunction } from 'express';

import { IRequestExtended } from '../interfaces';
import { agendaService } from '../services/agendaService';

class AgendaController {
    async getAgendaUser(req: Request, res: Response, next: NextFunction) {
        try {
            //@ts-ignore
            const { id } = req.user;
            const agenda = await agendaService.getAgendaUser(id);
            res.status(200).json(agenda);
        } catch(e) {
            next(e);
        }
    }

    async updateUserAgenda(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            //@ts-ignore
            const { id } = req.user;
            const { daysOfWeekArray, points, index, pointsOfDayArray } = req.body;
            const agenda = await agendaService.updateUserAgenda(id, daysOfWeekArray, points, index, pointsOfDayArray);
            res.status(200).json(agenda);
        } catch (e) {
            next(e);
        }
    }
}

export const agendaController = new AgendaController();