import { $authHost } from './index';
import jwt_decode from 'jwt-decode';

export const getUserById = async (accessToken) => {
    const {userId} = jwt_decode(accessToken);
    const {data} = await $authHost.get('/users/' + userId);
    return data;
}