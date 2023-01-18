import { IStatistic } from '../interfaces';
import { model } from '../models';

class StatisticsService {
    async createStatistic(
        howDidYouKnow: string, 
        whatAreYouStuding: string, 
        everyDayTarget: string, 
        userId: number,
        ): Promise<IStatistic> {
            // @ts-ignore
            return model.Statistic.create({ howDidYouKnow, whatAreYouStuding, everyDayTarget, userId });
    }

    async findStatisticUser(userId: number): Promise<boolean> {
        return !!model.Statistic.findOne({ where: { userId } }); 
    }

    async deleteStatistic(userId: number): Promise<void> {
        await model.Statistic.destroy({ where : { userId } });
    }
}

export const statisticsService = new StatisticsService();