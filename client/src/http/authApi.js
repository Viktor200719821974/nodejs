import {$authHost, $host} from "./index";

export const registration = async (email, password, firstName, lastName, age, phone) => {
    const {data} = await $host.post('/auth/registration', {email, password, firstName, lastName, age, phone});
    return data;
}
export const login = async (email, password) => {
    const {data} = await $host.post('/auth/login', {email, password});
    localStorage.setItem('accessToken', data.token.accessToken);
    localStorage.setItem('refreshToken', data.token.refreshToken);
    return data;
}
export const logOutUser = async () => {
    return await $authHost.post('/auth/logout');
}