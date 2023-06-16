import { $authHost } from './index';

export const getAgendaUser = async () => {
    return await $authHost.get('/agenda');
}
export const updateAgendaUser = async (daysOfWeekArray, points, index, pointsOfDayArray) => {
    return await $authHost.patch('/agenda', { daysOfWeekArray, points, index, pointsOfDayArray });
}