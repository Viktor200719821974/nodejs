import { $authHost, $host } from './index';

export const getThemes = async () => {
    return await $host.get('/themes');
}
export const createTheme = async (formData) => {
    return await  $authHost.post('/themes', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}