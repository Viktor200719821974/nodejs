import { $authHost } from './index';

export const getThemes = async () => {
    return await $authHost.get('/themes');
}
export const createTheme = async (title) => {
    return await  $authHost.post('/themes', { title });
}