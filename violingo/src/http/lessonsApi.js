import { $authHost } from './index';

export const createLesson = async (lessonNumber, themeId, moduleNumber) => {
    return await $authHost.post('/lessons', { lessonNumber, themeId, moduleNumber, });
}
export const getLessons = async (themeId) => {
    return await $authHost.get(`/lessons?themeId=${themeId}`);
}