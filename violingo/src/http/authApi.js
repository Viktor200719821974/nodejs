import {$authHost, $host} from './index';

export const registration = async (email, password, name, age) => {
    const {data} = await $host.post('/auth/registration', {email, password, name, age});
    return data;
}
export const login = async (email, password) => {
    const {data} = await $host.post('/auth/login', {email, password});
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return data;
}
export const logOutUser = async () => {
    return await $authHost.post('/auth/logout');
}
export const forgetPassword = async (email) => {
    return await $host.post('/auth/forget_password', {email});
}
export const changePassword = async (password, token) => {
    return await $host.post('/auth/change_password/' + token, {password});
}