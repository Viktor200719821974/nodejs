import { $authHost } from './index';

export const createLesson = async (lessonNumber, themeId, moduleId) => {
    return await $authHost.post('/lessons', { lessonNumber, themeId, moduleId, });
}
export const getLessons = async (themeId) => {
    return await $authHost.get(`/lessons?themeId=${themeId}`);
}