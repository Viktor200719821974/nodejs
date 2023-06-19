import { model } from '../models';
import { IAgendaUser } from '../interfaces';

class AgendaService {
    async getAgendaUser(userId: number): Promise<IAgendaUser | null> {
        return model.AgendaUser.findOne({ where: { userId } });
    }

    async updateUserAgenda(
        userId: number, 
        daysOfWeekArray: string[], 
        points: number, 
        index: number, 
        pointsOfDayArray: number[],
        arrayIndex: number[],
        updateBool: boolean,
    ) {
        if (updateBool) {
            for (let i = 0; i < arrayIndex.length; i++) {
                pointsOfDayArray[arrayIndex[i]] = 0;
            }
        }
        pointsOfDayArray[index] = points;
        return model.AgendaUser.update({ daysOfWeekArray, pointsOfDayArray }, { where: { userId } });
    }
}

export const agendaService = new AgendaService();