import { $authHost, $host } from './index';

export const createModule = async (formData) => {
    return await $authHost.post('/modules', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}
export const getModules = async () => {
    return await $host.get('/modules');
}
export const getModulesByTheme = async (themeId) => {
    return await $host.get(`/modules/modulesByTheme?themeId=${themeId}`);
}
export const getModuleById = async (id) => {
    return await $host.get('/modules/' + id);
}