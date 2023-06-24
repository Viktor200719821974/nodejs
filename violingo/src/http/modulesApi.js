import { $authHost } from './index';

export const createModule = async (formData) => {
    return await $authHost.post('/modules', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
    });
}
export const getModules = async (themeId) => {
    return await $authHost.get(`/modules?themeId=${themeId}`);
}