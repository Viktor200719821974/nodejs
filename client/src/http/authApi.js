import { $host } from './index';

export const loginUser = async (email, password) => {
    return await $host.post('/auth/login', { email, password });
};