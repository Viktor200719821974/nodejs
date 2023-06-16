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
        pointsOfDayArray: number[]
    ) {
        // let pointsOfDayArray = await model.AgendaUser.findOne({ where: { userId } })
        //     .then(data => data?.pointsOfDayArray);
        // const day = await model.AgendaUser.findOne({ where: {userId } }).then(data => data?.daysOfWeekArray);
        // if (day !== undefined) {
        //     console.log(day[6]);
        // }
        // if (pointsOfDayArray !== undefined) {
            // pointsOfDayArray[index] = points;
        // }
        return model.AgendaUser.update({ daysOfWeekArray, pointsOfDayArray }, { where: { userId } });
    }
}

export const agendaService = new AgendaService();