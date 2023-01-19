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

    async getStatisticByUserId(userId: number): Promise<IStatistic | null> {
        return model.Statistic.findOne({ where: {userId } });
    }

    async updateEveryDayTarget(userId: number, everyDayTarget: string): Promise<IStatistic | null> {
        await model.Statistic.update({ everyDayTarget }, { where: { userId } });
        return model.Statistic.findOne({ where: { userId } });
    }
    
    async findStatisticUser(userId: number): Promise<boolean> {
        return !!model.Statistic.findOne({ where: { userId } }); 
    }

    async deleteStatistic(userId: number): Promise<void> {
        await model.Statistic.destroy({ where : { userId } });
    }
}

export const statisticsService = new StatisticsService();