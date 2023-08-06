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
        console.log(points, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
        if (updateBool) {
            for (let i = 0; i < arrayIndex.length; i++) {
                pointsOfDayArray[arrayIndex[i]] = 0;
            }
        }
        console.log(pointsOfDayArray,'>>>>>>>>>>>>>>>>>>>>');
        pointsOfDayArray[index] = points;
        console.log(pointsOfDayArray, '>>>>>>>>>>>>>>>>>>>>>>>');
        return model.AgendaUser.update({ daysOfWeekArray, pointsOfDayArray }, { where: { userId } });
    }
}

export const agendaService = new AgendaService();