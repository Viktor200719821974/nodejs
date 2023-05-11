import { $authHost } from './index';

export const createModule = async (moduleNumber, themeId) => {
    return await $authHost.post('/modules', { moduleNumber, themeId });
}
export const getModules = async (themeId) => {
    return await $authHost.get(`/modules?themeId=${themeId}`);
}