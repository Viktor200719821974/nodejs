import { $host } from './index';

export const loginUser = async (email, password) => {
    return await $host.post('/auth/login', { email, password });
};
export const registrationUser = async (email, password, firstName, lastName) => {
    return await $host.post('/auth/registration', { email, password, firstName, lastName });
};
export const forgetPasswordUser = async (email) => {
    return await $host.post('/auth/forgetPassword', { email });
};