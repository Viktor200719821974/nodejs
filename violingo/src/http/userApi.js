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
export const updateUserLessonId = async (lessonId) => {
    return await $authHost.patch('/users/userLessonId',  { lessonId });
}
export const updateUserModuleId = async (moduleId) => {
    return await $authHost.patch('/users/userModuleId',  { moduleId });
}