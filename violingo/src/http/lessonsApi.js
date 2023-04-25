import { $authHost } from './index';

export const createLesson = async (lessonNumber, themeId) => {
    return await $authHost.post('/lessons', { lessonNumber, themeId });
}
export const getLessons = async (themeId) => {
    return await $authHost.get(`/lessons?themeId=${themeId}`);
}