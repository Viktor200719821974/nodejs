import { $authHost, $host } from './index';
import jwt_decode from 'jwt-decode';

export const getUserById = async (accessToken) => {
    const {userId} = jwt_decode(accessToken);
    return await $authHost.get('/users/' + userId);
}
export const activateAccount = async (token) => {
    const {data} = await $host.get(`/users/activateUser/${token}`);
    return data;
}
export const updateAgendaUser = async (daysOfWeekArray, points, index, pointsOfDayArray) => {
    return await $authHost.patch('/users/userAgenda', { daysOfWeekArray, points, index, pointsOfDayArray });
}