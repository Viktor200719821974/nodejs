import { Response, NextFunction, Request } from 'express';

import { IRequestExtended } from '../interfaces';
import { statisticsService } from '../services/statisticsService';
import { usersService } from '../services/usersService';

class StatisticsController {
    async createStatistic(req: Request, res: Response, next: NextFunction) {
        try {
            const {
                howDidYouKnow, whatAreYouStuding, everyDayTarget, email,
            } = req.body;
            const user = await usersService.getUserByEmail(email);
            if (!user) {
                res.status(404).json('No user');
                return;
            }
            // @ts-ignore
            const { id } = user;
            const exist = await statisticsService.findStatisticUser(+id);
            if (exist) {
                await statisticsService.deleteStatistic(+id);
            }
            const data = await statisticsService
                .createStatistic(howDidYouKnow, whatAreYouStuding, everyDayTarget, +id);
            await usersService.updateStatisticUser(+id);
            res.status(201).json(data);
        } catch (e) {
            next(e);
        }
    }

    async getStatisticByUserId(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            // @ts-ignore
            const { id } = req.user;
            const statistic = await statisticsService.getStatisticByUserId(+id);
            res.status(200).json(statistic);
        } catch (e) {
            next(e);
        }
    }

    async updateEveryDayTarget(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const { everyDayTarget } = req.body;
            // @ts-ignore
            const { id } = req.user;
            const statistic = await statisticsService.updateEveryDayTarget(+id, everyDayTarget);
            res.status(200).json(statistic);
        } catch (e) {
            next(e);
        }
    }
}

export const statisticsController = new StatisticsController();
